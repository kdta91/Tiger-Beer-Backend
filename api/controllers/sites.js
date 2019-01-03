const mongoose = require('mongoose');
const Site = require('../models/site');
const SitePrizeAllocation = require('../models/site-prize-allocation');

// exports.create_site = (req, res, next) => {
//     let sites = [{
//         "siteName": "Waterway Point",
//         "siteStartDate": "4 January 2019 16:30",
//         "siteEndDate": "4 January 2019 23:00"
//     }, {
//         "siteName": "Bugis Junction",
//         "siteStartDate": "4 January 2019 16:30",
//         "siteEndDate": "4 January 2019 23:00"
//     }, {
//         "siteName": "Suntec",
//         "siteStartDate": "4 January 2019 15:30",
//         "siteEndDate": "4 January 2019 22:00"
//     }, {
//         "siteName": "Great World City",
//         "siteStartDate": "5 January 2019 09:30",
//         "siteEndDate": "5 January 2019 16:00"
//     }, {
//         "siteName": "Elias Mall",
//         "siteStartDate": "5 January 2019 08:30",
//         "siteEndDate": "5 January 2019 15:00"
//     }, {
//         "siteName": "Clementi Mall",
//         "siteStartDate": "5 January 2019 09:30",
//         "siteEndDate": "5 January 2019 16:00"
//     }, {
//         "siteName": "Woodlands Mart",
//         "siteStartDate": "5 January 2019 09:30",
//         "siteEndDate": "5 January 2019 16:00"
//     }, {
//         "siteName": "Pioneer Mall",
//         "siteStartDate": "5 January 2019 15:30",
//         "siteEndDate": "5 January 2019 22:00"
//     }, {
//         "siteName": "Seletar Mall",
//         "siteStartDate": "5 January 2019 15:30",
//         "siteEndDate": "5 January 2019 22:00"
//     }, {
//         "siteName": "Junction 9",
//         "siteStartDate": "5 January 2019 16:30",
//         "siteEndDate": "5 January 2019 23:00"
//     }, {
//         "siteName": "Sembawang Shopping Center",
//         "siteStartDate": "5 January 2019 16:30",
//         "siteEndDate": "5 January 2019 23:00"
//     }, {
//         "siteName": "Woodlands 301",
//         "siteStartDate": "6 January 2019 07:30",
//         "siteEndDate": "6 January 2019 14:00"
//     }, {
//         "siteName": "Hougang Green",
//         "siteStartDate": "6 January 2019 07:30",
//         "siteEndDate": "6 January 2019 14:00"
//     }, {
//         "siteName": "Vista Point",
//         "siteStartDate": "6 January 2019 09:30",
//         "siteEndDate": "6 January 2019 16:00"
//     }, {
//         "siteName": "Yishun 3",
//         "siteStartDate": "6 January 2019 08:30",
//         "siteEndDate": "6 January 2019 15:00"
//     }, {
//         "siteName": "Kallang Leisure Park",
//         "siteStartDate": "6 January 2019 09:30",
//         "siteEndDate": "6 January 2019 16:00"
//     }, {
//         "siteName": "Jurong Point Hypermart",
//         "siteStartDate": "6 January 2019 15:30",
//         "siteEndDate": "6 January 2019 22:00"
//     }, {
//         "siteName": "Northpoint City",
//         "siteStartDate": "6 January 2019 16:30",
//         "siteEndDate": "6 January 2019 23:00"
//     }, {
//         "siteName": "Tampines",
//         "siteStartDate": "6 January 2019 16:30",
//         "siteEndDate": "6 January 2019 23:00"
//     }, {
//         "siteName": "Hougang",
//         "siteStartDate": "6 January 2019 00:00",
//         "siteEndDate": "6 January 2019 24:00"
//     }, {
//         "siteName": "Causeway Point",
//         "siteStartDate": "6 January 2019 15:30",
//         "siteEndDate": "6 January 2019 22:00"
//     }, {
//         "siteName": "Compass One",
//         "siteStartDate": "11 January 2019 16:30",
//         "siteEndDate": "11 January 2019 23:00"
//     }, {
//         "siteName": "Kampong Ubi",
//         "siteStartDate": "11 January 2019 16:30",
//         "siteEndDate": "11 January 2019 23:00"
//     }, {
//         "siteName": "Holland Smkt",
//         "siteStartDate": "11 January 2019 15:30",
//         "siteEndDate": "11 January 2019 22:00"
//     }, {
//         "siteName": "Woodlands 200",
//         "siteStartDate": "11 January 2019 15:30",
//         "siteEndDate": "11 January 2019 22:00"
//     }, {
//         "siteName": "Jurong Point",
//         "siteStartDate": "11 January 2019 15:30",
//         "siteEndDate": "11 January 2019 22:00"
//     }, {
//         "siteName": "Rivervale Mall",
//         "siteStartDate": "12 January 2019 08:30",
//         "siteEndDate": "12 January 2019 15:00"
//     }, {
//         "siteName": "Habitat by Honestbee",
//         "siteStartDate": "12 January 2019 09:30",
//         "siteEndDate": "12 January 2019 16:00"
//     }, {
//         "siteName": "Vivocity",
//         "siteStartDate": "12 January 2019 09:30",
//         "siteEndDate": "12 January 2019 16:00"
//     }, {
//         "siteName": "Serangoon B",
//         "siteStartDate": "12 January 2019 08:30",
//         "siteEndDate": "12 January 2019 15:00"
//     }, {
//         "siteName": "Jalan Tiga",
//         "siteStartDate": "12 January 2019 08:30",
//         "siteEndDate": "12 January 2019 15:00"
//     }, {
//         "siteName": "Ang Mo Kio Hub",
//         "siteStartDate": "12 January 2019 16:30",
//         "siteEndDate": "12 January 2019 23:00"
//     }, {
//         "siteName": "Jurong West 962",
//         "siteStartDate": "12 January 2019 16:30",
//         "siteEndDate": "12 January 2019 23:00"
//     }, {
//         "siteName": "IMM",
//         "siteStartDate": "12 January 2019 16:30",
//         "siteEndDate": "12 January 2019 23:00"
//     }, {
//         "siteName": "Tampines Mall",
//         "siteStartDate": "12 January 2019 16:30",
//         "siteEndDate": "12 January 2019 23:00"
//     }, {
//         "siteName": "Joo Seng",
//         "siteStartDate": "12 January 2019 16:30",
//         "siteEndDate": "12 January 2019 23:00"
//     }, {
//         "siteName": "Marine Parade",
//         "siteStartDate": "13 January 2019 09:30",
//         "siteEndDate": "13 January 2019 16:00"
//     }, {
//         "siteName": "Punggol 301",
//         "siteStartDate": "13 January 2019 07:30",
//         "siteEndDate": "13 January 2019 14:00"
//     }, {
//         "siteName": "Hyper Nex Mall",
//         "siteStartDate": "13 January 2019 09:30",
//         "siteEndDate": "13 January 2019 16:00"
//     }, {
//         "siteName": "Clementi A",
//         "siteStartDate": "13 January 2019 08:30",
//         "siteEndDate": "13 January 2019 15:00"
//     }, {
//         "siteName": "Hyper Sports Hub",
//         "siteStartDate": "13 January 2019 08:30",
//         "siteEndDate": "13 January 2019 15:00"
//     }, {
//         "siteName": "Geylang East",
//         "siteStartDate": "13 January 2019 16:30",
//         "siteEndDate": "13 January 2019 23:00"
//     }, {
//         "siteName": "Parkway",
//         "siteStartDate": "13 January 2019 15:30",
//         "siteEndDate": "13 January 2019 22:00"
//     }, {
//         "siteName": "Yishun 845",
//         "siteStartDate": "13 January 2019 16:30",
//         "siteEndDate": "13 January 2019 23:00"
//     }, {
//         "siteName": "Chin Swee",
//         "siteStartDate": "13 January 2019 16:30",
//         "siteEndDate": "13 January 2019 23:00"
//     }, {
//         "siteName": "Junction 10",
//         "siteStartDate": "13 January 2019 16:30",
//         "siteEndDate": "13 January 2019 23:00"
//     }, {
//         "siteName": "Clementi 720",
//         "siteStartDate": "18 January 2019 16:30",
//         "siteEndDate": "18 January 2019 23:00"
//     }, {
//         "siteName": "Tanjong Pagar",
//         "siteStartDate": "18 January 2019 16:30",
//         "siteEndDate": "18 January 2019 23:00"
//     }, {
//         "siteName": "Toa Payoh HDB Hub",
//         "siteStartDate": "18 January 2019 16:30",
//         "siteEndDate": "18 January 2019 23:00"
//     }, {
//         "siteName": "Hao Mart",
//         "siteStartDate": "18 January 2019 16:30",
//         "siteEndDate": "18 January 2019 23:00"
//     }, {
//         "siteName": "Eastpoint",
//         "siteStartDate": "18 January 2019 15:30",
//         "siteEndDate": "18 January 2019 22:00"
//     }, {
//         "siteName": "Sunplaza",
//         "siteStartDate": "19 January 2019 08:30",
//         "siteEndDate": "19 January 2019 15:00"
//     }, {
//         "siteName": "Tampines Central",
//         "siteStartDate": "19 January 2019 08:30",
//         "siteEndDate": "19 January 2019 15:00"
//     }, {
//         "siteName": "Bedok 739",
//         "siteStartDate": "19 January 2019 08:30",
//         "siteEndDate": "19 January 2019 15:00"
//     }, {
//         "siteName": "Kallang Bahru",
//         "siteStartDate": "19 January 2019 09:30",
//         "siteEndDate": "19 January 2019 16:00"
//     }, {
//         "siteName": "Northpoint Smkt",
//         "siteStartDate": "19 January 2019 09:30",
//         "siteEndDate": "19 January 2019 16:00"
//     }, {
//         "siteName": "Jalan Bahar",
//         "siteStartDate": "19 January 2019 16:30",
//         "siteEndDate": "19 January 2019 23:00"
//     }, {
//         "siteName": "Hillion Mall",
//         "siteStartDate": "19 January 2019 15:30",
//         "siteEndDate": "19 January 2019 22:00"
//     }, {
//         "siteName": "Jurong Superbowl",
//         "siteStartDate": "19 January 2019 16:30",
//         "siteEndDate": "19 January 2019 23:00"
//     }, {
//         "siteName": "Bedok 209",
//         "siteStartDate": "19 January 2019 16:30",
//         "siteEndDate": "19 January 2019 23:00"
//     }, {
//         "siteName": "Hyper JEM",
//         "siteStartDate": "19 January 2019 16:30",
//         "siteEndDate": "19 January 2019 23:00"
//     }, {
//         "siteName": "Bedok 539",
//         "siteStartDate": "20 January 2019 07:30",
//         "siteEndDate": "20 January 2019 14:00"
//     }, {
//         "siteName": "Loyang Point",
//         "siteStartDate": "20 January 2019 09:30",
//         "siteEndDate": "20 January 2019 16:00"
//     }, {
//         "siteName": "Toa Payoh A",
//         "siteStartDate": "20 January 2019 09:30",
//         "siteEndDate": "20 January 2019 16:00"
//     }, {
//         "siteName": "Hougang One",
//         "siteStartDate": "20 January 2019 08:30",
//         "siteEndDate": "20 January 2019 15:00"
//     }, {
//         "siteName": "Ang Mo - Ang Mo Kio",
//         "siteStartDate": "20 January 2019 08:30",
//         "siteEndDate": "20 January 2019 15:00"
//     }, {
//         "siteName": "Choa Chu Kang",
//         "siteStartDate": "20 January 2019 15:30",
//         "siteEndDate": "20 January 2019 22:00"
//     }, {
//         "siteName": "Bukit Panjang Plaza",
//         "siteStartDate": "20 January 2019 15:30",
//         "siteEndDate": "20 January 2019 22:00"
//     }, {
//         "siteName": "Serangoon 19",
//         "siteStartDate": "20 January 2019 16:30",
//         "siteEndDate": "20 January 2019 23:00"
//     }, {
//         "siteName": "U - Star - Sumang",
//         "siteStartDate": "20 January 2019 16:30",
//         "siteEndDate": "20 January 2019 23:00"
//     }, {
//         "siteName": "Bedok North A",
//         "siteStartDate": "20 January 2019 15:30",
//         "siteEndDate": "20 January 2019 22:00"
//     }];

//     sites.forEach((item, i) => {
//         console.log(item);
//         const site = new Site({
//             _id: new mongoose.Types.ObjectId,
//             siteName: item.siteName,
//             geofenceLatLong: '(0,0)',
//             siteStartDate: item.siteStartDate,
//             siteEndDate: item.siteEndDate
//         });

//         site.save()
//             .then((result) => {
//                 console.log(result);
//                 // res.status(201).json({
//                 //     code: 'Success',
//                 //     message: 'Site successfully created!'
//                 // });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 // res.status(500).json({
//                 //     error: error
//                 // });
//             });
//     });
// };

exports.create_site = (req, res, next) => {
    Site.find({
            siteName: req.body.siteName
        })
        .exec()
        .then((site) => {
            if (site.length >= 1) {
                return res.status(200).json({
                    code: 'Exists',
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
                            code: 'Success',
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
                            siteName: result.siteName,
                            siteStartDate: result.siteStartDate,
                            siteEndDate: result.siteEndDate,
                        }
                    })
                });
            } else {
                res.status(200).json({
                    status: 200,
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
        }, {
            runValidators: true
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
    const dateTime = new Date();

    Site.findById(id)
        .select('_id siteName geofenceLatLong siteStartDate siteEndDate')
        .exec()
        .then((result) => {
            if (result) {
                // console.log(result);
                SitePrizeAllocation.find({
                        siteId: mongoose.Types.ObjectId(id)
                    })
                    .select('_id prizeId siteId quantityAllocated quantityLeft')
                    .exec()
                    .then((prizeAllocResult) => {
                        let totalQtyLeft = prizeAllocResult.reduce(function (a, b) {
                            return a + b.quantityLeft;
                        }, 0);

                        if (dateTime < result.siteStartDate || dateTime >= result.siteEndDate) {
                            res.status(200).json({
                                message: 'InvalidSite'
                            });
                        } else if (totalQtyLeft <= 0) {
                            res.status(200).json({
                                message: 'NoQuantity'
                            });
                        } else {
                            res.status(200).json({
                                message: 'Success'
                            });
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({
                            error: error
                        });
                    });
            } else {
                res.status(200).json({
                    message: 'InvalidSite'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: 'InvalidSite'
            });
        });
};

exports.get_active_sites = (req, res, next) => {
    const dateTime = new Date();

    Site.find({
            siteStartDate: {
                $lte: dateTime
            },
            siteEndDate: {
                $gte: dateTime
            }
        })
        .select('_id siteName geofenceLatLong siteStartDate siteEndDate')
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({
                    count: result.length,
                    sites: result.map((site) => {
                        return {
                            siteID: site._id,
                            siteName: site.siteName,
                            siteStartDate: site.siteStartDate,
                            siteEndDate: site.siteEndDate,
                        }
                    })
                });
            } else {
                res.status(200).json({
                    message: 'InvalidSite'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: 'InvalidSite'
            });
        });
};