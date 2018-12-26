const express = require('express');
const router = express.Router();
const WinResultController = require('../../controllers/client/win-results');

router.get('/:siteId/:winSessionId', WinResultController.get_win_result);

module.exports = router;