const express = require('express');
const router = express.Router();
const UserTypeController = require('../controllers/user-types');

router.post('/', UserTypeController.user_create_user_type);
router.get('/', UserTypeController.user_get_all_user_types);
router.patch('/:userTypeId', UserTypeController.user_update_user_type);

module.exports = router;