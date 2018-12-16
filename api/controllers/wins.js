const mongoose = require('mongoose');
const Win = require('../models/win');

exports.create_win = (req, res, next) => {
    const win = new Win({
        _id: new mongoose.Types.ObjectId,
        siteId: req.body.siteId,
        sitePrizeId: req.body.sitePrizeId,
        winSequenceNumberPerSite: req.body.winSequenceNumberPerSite
    });

    win.save()
        .then((result) => {
            res.status(201).json({
                message: 'Win successfully created!'
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
        .select('_id siteId sitePrizeId winSequenceNumberPerSite winDate createdAt updatedAt')
        .populate('siteId sitePrizeId', 'siteName prizeName')
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                wins: results.map((result) => {
                    return {
                        _id: result._id,
                        siteId: result.siteId,
                        sitePrizeId: result.sitePrizeId,
                        winSequenceNumberPerSite: result.winSequenceNumberPerSite,
                        winDate: result.winDate,
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
        .select('_id siteId sitePrizeId winSequenceNumberPerSite winDate createdAt updatedAt')
        .populate('siteId sitePrizeId', 'siteName prizeName').exec()
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
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
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Win successfully updated!'
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
                message: 'Win successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};