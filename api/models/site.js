const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    siteName: {
        type: String,
        required: true,
        unique: true
    },
    geofenceLatLong: {
        type: String,
        required: true,
        unique: true
    },
    siteStartDate: {
        type: Date,
        required: true
    },
    siteEndDate: {
        type: Date,
        required: true
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

siteSchema.pre('save', (next) => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});

siteSchema.pre('update', function () {
    this.update({}, {
        $set: {
            updatedAt: new Date()
        }
    });
});

module.exports = mongoose.model('Site', siteSchema);