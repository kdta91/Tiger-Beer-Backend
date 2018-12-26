const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const SitePrizeAllocationController = require('../controllers/site-prizes-allocation');

router.post('/', SitePrizeAllocationController.create_site_prize_allocation);
router.get('/', SitePrizeAllocationController.get_all_site_prize_allocation);
router.get('/:sitePrizeAllocationId', SitePrizeAllocationController.get_site_prize_allocation);
router.get('/site/:siteId', SitePrizeAllocationController.get_site_prize_allocation_by_site);
router.patch('/:sitePrizeAllocationId', SitePrizeAllocationController.update_site_prize_allocation);
router.delete('/:sitePrizeAllocationId', SitePrizeAllocationController.delete_site_prize_allocation);

module.exports = router;