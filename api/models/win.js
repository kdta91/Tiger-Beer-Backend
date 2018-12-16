const mongoose = require('mongoose');

const winSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site',
        required: true
    },
    sitePrizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SitePrizeAllocation',
        required: true
    },
    winSequenceNumberPerSite: {
        type: Number,
        required: true
    },
    winDate: {
        type: Date,
        default: Date.now
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

winSchema.pre('save', (next) => {
    if (!this.winDate && !this.createdAt) {
        let now = new Date();
        this.winDate = now;
        this.createdAt = now;
    }
    next();
});

winSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    });
});

module.exports = mongoose.model('Win', winSchema);