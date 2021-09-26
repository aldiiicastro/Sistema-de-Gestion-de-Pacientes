const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

router.get('/users', async (req, res) => {
   usersControllers.get_all_users(req, res)
});

router.get('/users/:id', async (req, res) => {
    usersControllers.get_user_by_id(req, res)
});

router.post('/login', async (req, res) => {
    usersControllers.login_user(req, res)
})

router.post('/register', async (req, res) => {
    usersControllers.register_user(req, res)
})

module.exports = router;