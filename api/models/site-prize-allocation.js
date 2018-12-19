const mongoose = require('mongoose');

const sitePrizeAllocationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    prizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prize',
        required: true
    },
    siteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site',
        required: true
    },
    rank: {
        type: Number,
        // required: true
    },
    quantityAllocated: {
        type: Number,
        // required: true
    },
    quantityLeft: {
        type: Number,
        // required: true
    },
    odds: {
        type: Number
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

sitePrizeAllocationSchema.pre('save', (next) => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

sitePrizeAllocationSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    });
});

module.exports = mongoose.model('SitePrizeAllocation', sitePrizeAllocationSchema);