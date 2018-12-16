const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const UserController = require('../controllers/users');

// login
router.post('/login', UserController.user_login);
// user actions
router.post('/', UserController.user_create_user);
router.get('/', UserController.user_get_all_users);
router.get('/:userId', UserController.user_get_user);
router.patch('/:userId', UserController.user_update_user);
router.delete('/:userId', UserController.user_delete_user);

module.exports = router;