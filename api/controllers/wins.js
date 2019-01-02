const mongoose = require('mongoose');
const Win = require('../models/win');
const SitePrizeAllocation = require('../models/site-prize-allocation');

exports.create_win = (req, res, next) => {
    const win = new Win({
        _id: new mongoose.Types.ObjectId,
        winSessionId: req.body.winSessionId,
        siteId: req.body.siteId,
        sitePrizeId: req.body.sitePrizeId,
        winSequenceNumberPerSite: req.body.winSequenceNumberPerSite
    });

    win.save()
        .then((result) => {
            return SitePrizeAllocation.findOneAndUpdate({
                    siteId: req.body.siteId,
                    prizeId: req.body.sitePrizeId
                }, {
                    $inc: {
                        quantityLeft: -1
                    }
                })
                .exec()
                .then((allocation) => {
                    return allocation;
                })
                .catch((error) => {
                    return error;
                });
        })
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'Win result successfully logged!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_all_wins = (req, res, next) => {
    Win.find()
        .select('_id winSessionId siteId sitePrizeId winChecked winSequenceNumberPerSite createdAt updatedAt')
        .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                wins: results.map((result) => {
                    return {
                        _id: result._id,
                        winSessionId: result.winSessionId,
                        siteId: result.siteId,
                        sitePrizeId: result.sitePrizeId,
                        winChecked: result.winChecked,
                        winSequenceNumberPerSite: result.winSequenceNumberPerSite,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/win/' + result._id
                        }
                    }
                })
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_win = (req, res, next) => {
    const id = req.params.winId;

    Win.findById(id)
        .select('_id winSessionId siteId sitePrizeId winSequenceNumberPerSite createdAt updatedAt')
        .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(200).json({
                    message: 'No valid entry found!'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.update_win = (req, res, next) => {
    const id = req.params.winId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    Win.update({
            _id: id
        }, {
            $set: updateData
        }, {
            runValidators: true
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Win result successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.delete_win = (req, res, next) => {
    const id = req.params.winId;

    Win.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Win result successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_latest_win = (req, res, next) => {
    Win.findOneAndUpdate({
            siteId: mongoose.Types.ObjectId(req.params.siteId),
            winChecked: false
        }, {
            $set: {
                winChecked: true
            }
        }, {
            sort: {
                'createdAt': 1
            },
            new: true
        })
        .select('_id winSessionId siteId sitePrizeId winChecked winSequenceNumberPerSite createdAt updatedAt')
        .populate('siteId sitePrizeId', 'siteName prizeType prizeName')
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({
                    prizeId: result.sitePrizeId.prizeType
                });
            } else {
                res.status(200).json({
                    prizeId: -1
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};