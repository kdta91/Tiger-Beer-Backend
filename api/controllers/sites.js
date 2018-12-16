const mongoose = require('mongoose');
const Site = require('../models/site');

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
            res.status(200).json({
                count: results.length,
                orders: results.map((result) => {
                    return {
                        _id: result._id,
                        siteName: result.siteName,
                        geofenceLatLong: result.geofenceLatLong,
                        siteStartDate: result.siteStartDate,
                        siteEndDate: result.siteEndDate,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/site/' + result._id
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