const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const SiteController = require('../controllers/sites');

router.post('/', SiteController.site_create_site);
router.get('/', SiteController.site_get_all_sites);
router.get('/:siteId', SiteController.site_get_site);
router.patch('/:siteId', SiteController.site_update_site);
router.delete('/:siteId', SiteController.site_delete_site);

module.exports = router;