const mongoose = require('mongoose');

const userTypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    typeId: {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserType', userTypeSchema);