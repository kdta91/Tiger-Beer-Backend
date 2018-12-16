const mongoose = require('mongoose');
const Prize = require('../models/prize');

exports.prize_create_prize = (req, res, next) => {
    Prize.find({
            prizeName: req.body.prizeName
        })
        .exec()
        .then((prize) => {
            if (prize.length >= 1) {
                return res.status(409).json({
                    message: 'Prize already exists!'
                });
            } else {
                const prize = new Prize({
                    _id: new mongoose.Types.ObjectId,
                    prizeName: req.body.prizeName,
                    prizeImage: req.body.prizeImage,
                    prizeFrame: req.body.prizeFrame
                });

                prize.save()
                    .then((result) => {
                        res.status(201).json({
                            message: 'Prize successfully created!'
                        });
                    })
                    .catch((error) => {
                        res.status(500).json({
                            error: error
                        });
                    });
            }
        });
};

exports.prize_get_all_prizes = (req, res, next) => {
    Prize.find()
        .select('_id prizeName prizeImage prizeFrame createdAt updatedAt')
        // .populate()
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                orders: results.map((result) => {
                    return {
                        _id: result._id,
                        prizeName: result.prizeName,
                        prizeImage: result.prizeImage,
                        prizeFrame: result.prizeFrame,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/prize/' + result._id
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

exports.prize_get_prize = (req, res, next) => {
    const id = req.params.prizeId;

    Prize.findById(id)
        .select('_id prizeName prizeImage prizeFrame createdAt updatedAt')
        .exec()
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

exports.prize_update_prize = (req, res, next) => {
    const id = req.params.prizeId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    Prize.update({
            _id: id
        }, {
            $set: updateData
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Prize successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.prize_delete_prize = (req, res, next) => {
    const id = req.params.prizeId;

    Prize.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Prize successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};