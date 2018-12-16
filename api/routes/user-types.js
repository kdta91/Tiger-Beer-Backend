const express = require('express');
const router = express.Router();
const UserTypeController = require('../controllers/user-types');

router.post('/', UserTypeController.create_user_type);
router.get('/', UserTypeController.get_all_user_types);
router.patch('/:userTypeId', UserTypeController.update_user_type);

module.exports = router;