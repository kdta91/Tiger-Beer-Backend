const mongoose = require('mongoose');
const SitePrizeAllocation = require('../../models/site-prize-allocation');
const Prize = require('../../models/prize');

exports.get_win_result = (req, res, next) => {
    let oddsFormula = (sitePrizes) => {
        let luckyNumber = Math.floor(Math.random() * 100) + 1;
        let totalOdds = sitePrizes.reduce(function (a, b) {
            return a + b.odds;
        }, 0);
        let getProbability = (odds, totalOdds) => {
            return Math.round((odds / totalOdds * 100));
        };
        let filtered = sitePrizes.filter((prize) => prize.odds > 0);
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

    SitePrizeAllocation.find({
            siteId: mongoose.Types.ObjectId(req.params.siteId)
        })
        .then((result) => {
            let prize = oddsFormula(result)[0];

            Prize.findById(prize.prizeId)
                .exec()
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json({
                        error: error
                    })
                });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};