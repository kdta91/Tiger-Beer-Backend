const mongoose = require('mongoose');
const Site = require('../models/site');
const SitePrizeAllocation = require('../models/site-prize-allocation');

exports.create_site = (req, res, next) => {
    Site.find({
            siteName: req.body.siteName
        })
        .exec()
        .then((site) => {
            if (site.length >= 1) {
                return res.status(409).json({
                    message: 'Site already exists!'
                });
            } else {
                const site = new Site({
                    _id: new mongoose.Types.ObjectId,
                    siteName: req.body.siteName,
                    geofenceLatLong: req.body.geofenceLatLong,
                    siteStartDate: req.body.siteStartDate,
                    siteEndDate: req.body.siteEndDate
                });

                site.save()
                    .then((result) => {
                        res.status(201).json({
                            message: 'Site successfully created!'
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

exports.get_all_sites = (req, res, next) => {
    Site.find()
        .select('_id siteName geofenceLatLong siteStartDate siteEndDate createdAt updatedAt')
        // .populate()
        .exec()
        .then((results) => {
            if (results) {
                res.status(200).json({
                    count: results.length,
                    sites: results.map((result) => {
                        return {
                            // _id: result._id,
                            // siteName: result.siteName,
                            // geofenceLatLong: result.geofenceLatLong,
                            // siteStartDate: result.siteStartDate,
                            // siteEndDate: result.siteEndDate,
                            // createdAt: result.createdAt,
                            // updatedAt: result.updatedAt,
                            // request: {
                            //     type: 'GET',
                            //     url: 'http://localhost:3000/site/' + result._id
                            // }
                            siteID: result._id,
                            siteName: result.siteName
                        }
                    })
                });
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'Unable to retrieve site list.'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_site = (req, res, next) => {
    const id = req.params.siteId;

    Site.findById(id)
        .select('_id siteName geofenceLatLong siteStartDate siteEndDate')
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

exports.update_site = (req, res, next) => {
    const id = req.params.siteId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    Site.update({
            _id: id
        }, {
            $set: updateData
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.delete_site = (req, res, next) => {
    const id = req.params.siteId;

    Site.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_site_status = (req, res, next) => {
    // siteID, datetime, deviceId, sessionId
    const id = req.params.siteId;
    // const sessionId = req.body.sessionId;
    // const deviceId = req.body.deviceId;
    const dateTime = req.body.dateTime;

    Site.findById(id)
        .select('_id siteName geofenceLatLong siteStartDate siteEndDate')
        .exec()
        .then((result) => {
            if (result) {
                SitePrizeAllocation.find({
                    siteId: mongoose.Types.ObjectId(id)
                })
                .select('_id prizeId siteId quantityAllocated quantityLeft')
                .exec()
                .then((prizeAllocResult) => {
                    let totalQtyLeft = prizeAllocResult.reduce(function (a, b) {
                        return a + b.quantityLeft;
                    }, 0);

                    if (dateTime >= result.siteEndDate || totalQtyLeft <= 0) {
                        res.status(404).json({
                            status: 404,
                            message: 'Invalid datetime or site.'
                        });
                    } else {
                        res.status(200).json({
                            status: 200,
                            message: 'Site ready.'
                        });
                    }
                })
                .catch((error) => {
                    res.status(500).json({
                        error: error
                    });
                });
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