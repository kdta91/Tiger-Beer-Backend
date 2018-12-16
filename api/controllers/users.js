const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.user_create_user = (req, res, next) => {
    User.find({
            username: req.body.username
        })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Username already exists!'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId,
                            username: req.body.username,
                            email: req.body.email,
                            password: hash,
                            userType: req.body.userType
                        });

                        user.save()
                            .then((result) => {
                                res.status(201).json({
                                    message: 'User successfully created!'
                                });
                            })
                            .catch((error) => {
                                res.status(500).json({
                                    error: error
                                });
                            });
                    }
                });
            }
        });
};

exports.user_login = (req, res, next) => {
    User.find({
            username: req.body.username
        })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authentication failed!'
                });
            }

            bcrypt.compare(req.body.password, user[0].password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Authentication failed!'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            userId: user[0]._id,
                            username: user[0].username,
                            userType: user[0].userType
                        },
                        process.env.JWT_KEY, {
                            expiresIn: '1h'
                        }
                    );

                    return res.status(200).json({
                        message: 'Authentication successful!',
                        token: token
                    });
                }

                res.status(401).json({
                    message: 'Authentication failed!'
                });
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.user_get_all_users = (req, res, next) => {
    // console.log(req.userData.userType);
    // const userData = parseInt(req.userData.userType);
    // if (userData === 1 || userData === 2) {
    User.find()
        .select('_id username email password createdAt updatedAt')
        // .populate('userType', 'userType')
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                orders: results.map((result) => {
                    return {
                        _id: result._id,
                        username: result.username,
                        email: result.email,
                        password: result.password,
                        created: result.created,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/user/' + result._id
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
    // } else {
    //     return res.status(401).json({
    //         message: 'Not authorized to perform action!'
    //     });
    // }
};

exports.user_get_user = (req, res, next) => {
    const id = req.params.userId;

    User.findById(id)
        .select('_id username email password')
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

exports.user_update_user = (req, res, next) => {
    const id = req.params.userId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    User.update({
            _id: id
        }, {
            $set: updateData
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'User successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.user_delete_user = (req, res, next) => {
    const id = req.params.userId;

    User.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'User successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};