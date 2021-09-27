const express = require('express');
const { connect } = require('mongoose');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const timeout = require('connect-timeout');

router.get('/users', timeout('20s'), async (req, res) => {
   usersControllers.get_all_users(req, res)
});

router.get('/users/:id', timeout('20s'), async (req, res) => {
    usersControllers.get_user_by_id(req, res)
});

router.post('/login', timeout('20s'), async (req, res) => {
    usersControllers.login_user(req, res)
})

router.post('/register', timeout('20s'), async (req, res) => {
    usersControllers.register_user(req, res)
})

router.put('/delete/:id', timeout('20s'), async (req, res) => {
    usersControllers.delete_user(req, res)
})

module.exports = router;