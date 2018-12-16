const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const PrizeController = require('../controllers/prizes');

router.post('/', PrizeController.create_prize);
router.get('/', PrizeController.get_all_prizes);
router.get('/:prizeId', PrizeController.get_prize);
router.patch('/:prizeId', PrizeController.update_prize);
router.delete('/:prizeId', PrizeController.delete_prize);

module.exports = router;