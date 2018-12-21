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

        console.log(prizeResult);

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

    // SitePrizeAllocation.find({
    //         siteId: mongoose.Types.ObjectId(req.params.siteId)
    //     })
    //     .exec()
    //     .then((allocation) => {
    //         // console.log(allocation);
    //         // let prize = qtyLeftFormula(allocation)[0];
    //         let prize = oddsFormula(allocation)[0];
    //         console.log(prize);
    //         return prize;
    //     })
    //     .then((result) => {
    //         // console.log(result);
    //         return Prize.findById(result.prizeId)
    //             .select('_id')
    //             .exec()
    //             .then((prize) => {
    //                 return prize;
    //             })
    //             .catch((error) => {
    //                 return error;
    //             });
    //     })
    //     .then((prize) => {
    //         console.log('Prize ID: ' + prize._id);
    //         console.log('Site ID: ' + req.params.siteId);
    //         console.log(new mongoose.Types.ObjectId);
    //         const win = new Win({
    //             _id: new mongoose.Types.ObjectId,
    //             winSessionId: 'fb2e77d.47a0479900504cb3ab4a1f626d174d2d',
    //             siteId: req.params.siteId,
    //             sitePrizeId: prize._id
    //         });

    //         return win.save()
    //             .then((result) => {
    //                 // return SitePrizeAllocation.findOneAndUpdate({
    //                 //         siteId: result.siteId,
    //                 //         prizeId: result.sitePrizeId
    //                 //     }, {
    //                 //         $inc: {
    //                 //             quantityLeft: -1
    //                 //         }
    //                 //     })
    //                 //     .exec()
    //                 //     .then((sitePrizeAllocation) => {
    //                 //         return sitePrizeAllocation;
    //                 //     })
    //                 //     .catch((error) => {
    //                 //         return error;
    //                 //     });
    //                 return result;
    //             })
    //             .catch((error) => {
    //                 return error;
    //             });
    //     })
    //     .then((result) => {
    //         console.log(result);
    //         if (result) {
    //             res.status(200).json({
    //                 prizeId: result.sitePrizeId
    //             });
    //         } else {
    //             res.status(404).json({
    //                 error: 404,
    //                 message: 'Something went wrong. Please try again.'
    //             })
    //         }
    //     })
    //     .catch((error) => {
    //         res.status(500).json({
    //             error: error
    //         });
    //     });

    SitePrizeAllocation.find({
            siteId: mongoose.Types.ObjectId(req.params.siteId)
        })
        .exec()
        .then((result) => {
            if (result) {
                // let prize = qtyLeftFormula(result)[0];
                let prize = oddsFormula(result)[0];

                res.status(200).json({
                    prizeId: prize.prizeId
                });
            } else {
                res.status(404).json({
                    error: 404,
                    message: 'Something went wrong. Please try again.'
                })
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};