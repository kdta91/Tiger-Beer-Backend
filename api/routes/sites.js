const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const SiteController = require('../controllers/sites');

router.post('/', SiteController.create_site);
router.get('/', SiteController.get_all_sites);
router.get('/:siteId', SiteController.get_site);
router.patch('/:siteId', SiteController.update_site);
router.delete('/:siteId', SiteController.delete_site);
router.get('/:siteId/status', SiteController.get_site_status);

module.exports = router;