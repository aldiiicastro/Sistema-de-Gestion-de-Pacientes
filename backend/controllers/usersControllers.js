const { response } = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.login_user = async function (req, res) {
    try {
        if (!req.body.email || !req.body.password) {
            res.status(400).json({
                response: 'Revisar campos y/o sus datos'
            })
        }
        const findUser = await User.findOne({ email: req.body.email, password: req.body.password })

        findUser ? res.status(200).json({ response: 'usuario logueado' }) : res.status(404).json({ response: 'usuario no encontrado' })
    } catch (error) {
        res.serverError(error)
    }
}

exports.get_all_users = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ response: users });
    } catch (error) {
        res.serverError(error)
    }
}

exports.get_user_by_id = async function (req, res) {
    try {
        const user = await User.findById(req.params.id);

        user ? res.status(200).json({ response: user }) : res.status(400).json({ response: 'usuario no encontrado' })
    } catch (error) {
        res.serverError(error)
    }

}

exports.register_user = async function (req, res) {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            res.status(404).json({
                response: 'Revisar campos y/o sus datos'
            })
        }

        const findUser = await User.findOne({ email: req.body.email })

        if (findUser) {
            res.status(400).json({
                response: 'Usuario ya creado para este email'
            })
        } else {
            const user = await User.create({ name: req.body.name, email: req.body.email, password: req.body.password })

            res.status(200).json({
                response: 'Usuario registrado con exito'
            })
        }


    } catch (error) {
        res.serverError(error)
    }
}

