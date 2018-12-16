const mongoose = require('mongoose');
const UserType = require('../models/user-type');

exports.create_user_type = (req, res, next) => {
    const userType = new UserType({
        _id: new mongoose.Types.ObjectId,
        typeId: req.body.typeId,
        userType: req.body.userType
    });
    userType.save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'User Type added!'
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};

exports.get_all_user_types = (req, res, next) => {
    UserType.find()
        .exec()
        .then((docs) => {
            res.status(200).json({
                count: docs.length,
                userTypes: docs.map((doc) => {
                    return {
                        _id: doc._id,
                        typeId: doc.typeId,
                        userType: doc.userType
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

exports.update_user_type = (req, res, next) => {
    const id = req.params.userTypeId;
    const updateOps = {};

    console.log(req.body);

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    UserType.update({
            _id: id
        }, {
            $set: updateOps
        })
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};