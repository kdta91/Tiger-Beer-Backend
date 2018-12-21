const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const WinController = require('../controllers/wins');

router.post('/', WinController.create_win);
router.get('/', WinController.get_all_wins);
router.get('/:winId', WinController.get_win);
router.patch('/:winId', WinController.update_win);
router.delete('/:winId', WinController.delete_win);

module.exports = router;