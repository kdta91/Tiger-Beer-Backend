const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkUserRole = require('../middleware/check-user-role');
const UserController = require('../controllers/users');

// login
router.post('/login', UserController.login);
// user actions
router.post('/', UserController.create_user);
router.get('/', UserController.get_all_users);
router.get('/:userId', UserController.get_user);
router.patch('/:userId', UserController.update_user);
router.delete('/:userId', UserController.delete_user);

module.exports = router;