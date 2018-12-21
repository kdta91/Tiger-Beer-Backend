const mongoose = require('mongoose');
const SitePrizeAllocation = require('../models/site-prize-allocation');

exports.create_site_prize_allocation = (req, res, next) => {
    const sitePrizeAllocation = new SitePrizeAllocation({
        _id: new mongoose.Types.ObjectId,
        prizeId: req.body.prizeId,
        siteId: req.body.siteId,
        rank: req.body.rank,
        quantityAllocated: req.body.quantityAllocated,
        quantityLeft: req.body.quantityLeft,
        odds: req.body.odds
    });

    sitePrizeAllocation.save()
        .then((result) => {
            res.status(201).json({
                message: 'Site prize allocation successfully created!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_all_site_prize_allocation = (req, res, next) => {
    SitePrizeAllocation.find()
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                sitePrizeAllocations: results.map((result) => {
                    return {
                        _id: result._id,
                        prizeId: result.prizeId,
                        siteId: result.siteId,
                        rank: result.rank,
                        quantityAllocated: result.quantityAllocated,
                        quantityLeft: result.quantityLeft,
                        odds: result.odds,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/site-prize-allocation/' + result._id
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

exports.get_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeId;

    SitePrizeAllocation.findById(id)
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
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

exports.update_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    SitePrizeAllocation.update({
            _id: id
        }, {
            $set: updateData
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site prize allocation successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.delete_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeId;

    SitePrizeAllocation.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site prize allocation successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};