const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

module.exports = router;