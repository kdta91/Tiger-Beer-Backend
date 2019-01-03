const mongoose = require('mongoose');
const SitePrizeAllocation = require('../../models/site-prize-allocation');
const Prize = require('../../models/prize');
const Win = require('../../models/win');

exports.get_win_result = (req, res, next) => {
    let oddsFormula = (sitePrizes) => {
        let filtered = sitePrizes.filter((prize) => prize.odds > 0 && prize.quantityLeft > 0);
        let totalOdds = filtered.reduce(function (a, b) {
            return a + b.odds;
        }, 0);
        let getProbability = (odds, totalOdds) => {
            return Math.round((odds / totalOdds * 100));
        };
        let luckyNumber = Math.floor(Math.random() * 100) + 1;
        let minRange = 1;
        let maxRange = 100;
        let prizeResult = [];

        for (let i = 0; i < filtered.length; i++) {
            let sitePrize = filtered[i];
            let probability = getProbability(sitePrize.odds, totalOdds);

            maxRange = (filtered.length === i + 1) ? 100 : (i > 0) ? probability + minRange : probability;

            prizeResult.push({
                'prizeId': sitePrize.prizeId,
                'luckyNumber': luckyNumber,
                'probability': probability,
                'range': {
                    'min': (i > 0) ? minRange + 1 : minRange,
                    'max': maxRange
                }
            });

            minRange = maxRange;
        }

        return prizeResult.filter((prize) => (luckyNumber >= prize.range.min && luckyNumber <= prize.range.max));
    };

    let qtyLeftFormula = (sitePrizes) => {
        let filtered = sitePrizes.filter((prize) => prize.quantityLeft > 0);
        let totalQtyLeft = filtered.reduce(function (a, b) {
            return a + b.quantityLeft;
        }, 0);
        let getProbability = (qtyLeft, totalQtyLeft) => {
            return Math.round((qtyLeft / totalQtyLeft * 100));
        };
        let luckyNumber = Math.floor(Math.random() * totalQtyLeft) + 1;
        let minRange = 1;
        let maxRange = totalQtyLeft;
        let prizeResult = [];

        for (let i = 0; i < filtered.length; i++) {
            let sitePrize = filtered[i];
            let probability = getProbability(sitePrize.quantityLeft, totalQtyLeft);

            maxRange = (i > 0) ? minRange + sitePrize.quantityLeft : sitePrize.quantityLeft;

            prizeResult.push({
                'prizeId': sitePrize.prizeId,
                'luckyNumber': luckyNumber,
                'probability': probability,
                'range': {
                    'min': (i > 0) ? minRange + 1 : minRange,
                    'max': maxRange
                }
            });

            minRange = maxRange;
        }

        return prizeResult.filter((prize) => (luckyNumber >= prize.range.min && luckyNumber <= prize.range.max));
    };

    SitePrizeAllocation.find({
            siteId: mongoose.Types.ObjectId(req.params.siteId)
        })
        .exec()
        .then((allocation) => {
            let hasOdds = allocation.some((alloc) => {
                return alloc.odds > 0;
            });

            var prize;

            if (hasOdds) {
                prize = oddsFormula(allocation)[0];
            } else {
                prize = qtyLeftFormula(allocation)[0];
            }

            if (prize) {
                return prize;
            } else {
                return Win.findOne({
                        'winSessionId': req.params.winSessionId,
                        'siteId': req.params.siteId
                    })
                    .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
                    .exec()
                    .then((foundWin) => {
                        if (foundWin) {
                            return {
                                prizeId: foundWin.sitePrizeId
                            };
                        } else {
                            return null;
                        }
                    })
                    .catch((error) => {
                        throw error;
                    });
            }
        })
        .then((result) => {
            if (result) {
                return Prize.findById(result.prizeId)
                    .select('_id')
                    .exec()
                    .then((prize) => {
                        return prize;
                    })
                    .catch((error) => {
                        throw error;
                    });
            } else {
                return null;
            }
        })
        .then((prize) => {
            if (prize) {
                const win = new Win({
                    _id: new mongoose.Types.ObjectId,
                    winSessionId: req.params.winSessionId,
                    siteId: req.params.siteId,
                    sitePrizeId: prize._id
                });

                return Win.find({
                        'winSessionId': req.params.winSessionId,
                        'siteId': req.params.siteId
                    })
                    .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
                    .exec()
                    .then((won) => {
                        if (won.length > 0) {
                            return won[0];
                        } else {
                            return win.save()
                                .then((saved) => {
                                    return SitePrizeAllocation.findOneAndUpdate({
                                            siteId: saved.siteId,
                                            prizeId: saved.sitePrizeId
                                        }, {
                                            $inc: {
                                                quantityLeft: -1
                                            }
                                        })
                                        .exec()
                                        .then((sitePrizeAllocation) => {
                                            return Win.findById(saved._id)
                                                .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
                                                .exec()
                                                .then((found) => {
                                                    return found;
                                                })
                                                .catch((error) => {
                                                    throw error;
                                                })
                                        })
                                        .catch((error) => {
                                            throw error;
                                        });
                                })
                                .catch((error) => {
                                    throw error;
                                });
                        }
                    })
                    .catch((error) => {
                        throw error;
                    })
            } else {
                return null;
            }
        })
        .then((result) => {
            if (result) {
                res.status(200).json({
                    prizeId: result.sitePrizeId.prizeType
                });
            } else {
                res.status(200).json({
                    message: 'NoQuantity'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};