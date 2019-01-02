const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userTypeRoutes = require('./api/routes/user-types');
const userRoutes = require('./api/routes/users');
const siteRoutes = require('./api/routes/sites');
const prizeRoutes = require('./api/routes/prizes');
const sitePrizeAllocationRoutes = require('./api/routes/site-prizes-allocation');
const winRoutes = require('./api/routes/wins');
const getWinRoutes = require('./api/routes/client/win-results');

// const databaseURL = 'mongodb://tiger-beer:' + process.env.MONGO_ATLAS_PW + '@tiger-beer-shard-00-00-sryy6.mongodb.net:27017,tiger-beer-shard-00-01-sryy6.mongodb.net:27017,tiger-beer-shard-00-02-sryy6.mongodb.net:27017/test?ssl=true&replicaSet=tiger-beer-shard-0&authSource=admin&retryWrites=true';
const databaseURL = 'mongodb://localhost:27017/tiger-beer';

mongoose.connect(databaseURL, {
    useNewUrlParser: true
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Prevent CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// Routes
app.use('/user-type', userTypeRoutes);
app.use('/user', userRoutes);
app.use('/site', siteRoutes);
app.use('/prize', prizeRoutes);
app.use('/site-prize-allocation', sitePrizeAllocationRoutes);
app.use('/win', winRoutes);
app.use('/get-win', getWinRoutes);

app.use((req, res, next) => {
    const error = new Error('Page not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;