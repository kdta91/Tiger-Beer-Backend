const mongoose = require('mongoose');

const prizeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    prizeName: {
        type: String,
        required: true,
        unique: true
    },
    prizeImage: {
        type: String
    },
    prizeFrame: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

prizeSchema.pre('save', (next) => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

prizeSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    });
});

module.exports = mongoose.model('Prize', prizeSchema);