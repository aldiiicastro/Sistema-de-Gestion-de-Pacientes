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

router.get('/users/byEmail/:email', timeout('20s'), async (req, res) => { 
    usersControllers.get_user_by_email(req, res)
})

router.post('/login', timeout('20s'), async (req, res) => {
    usersControllers.login_user(req, res)
})

router.post('/register', timeout('20s'), async (req, res) => {
    usersControllers.register_user(req, res)
})

router.put('/delete/:id', timeout('20s'), async (req, res) => {
    usersControllers.delete_user(req, res)
})

router.delete('/delete/byEmail/:email', timeout('20s'), async (req, res) => {
    usersControllers.delete_user_byEmail(req, res)
})

router.put('/changePassword', timeout('20s'), async (req, res) => {
    usersControllers.change_password(req, res)
})

router.post('/mailRegistered', timeout('20s'), async (req, res) => {
    usersControllers.mail_registered(req, res)
})

router.put('/updateFirstLog/:id',timeout('30s'),async (req,res)=>{
 usersControllers.update_firstLog(req,res);
});


module.exports = router;