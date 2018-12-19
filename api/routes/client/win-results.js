const express = require('express');
const router = express.Router();
const WinResultController = require('../../controllers/client/win-results');

router.get('/:siteId', WinResultController.get_win_result);

module.exports = router;