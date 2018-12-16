const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const PrizeController = require('../controllers/prizes');

router.post('/', PrizeController.prize_create_prize);
router.get('/', PrizeController.prize_get_all_prizes);
router.get('/:prizeId', PrizeController.prize_get_prize);
router.patch('/:prizeId', PrizeController.prize_update_prize);
router.delete('/:prizeId', PrizeController.prize_delete_prize);

module.exports = router;