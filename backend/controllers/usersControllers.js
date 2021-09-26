const { response } = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 * Como anotación, deberiamos modificar las responses en caso de errores, hoy por hoy esta devolviendo un objeto completo.
 * Lo mismo para usuarios, los endpoints no deberian devolver el id y contraseñas.
 */

exports.login_user = async function (req, res) {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                response: 'Revisar campos y/o sus datos'
            })
        }
        const findUser = await User.findOne({ email: req.body.email, password: req.body.password })

        findUser ? res.status(200).json({ response: 'usuario logueado' }) : res.status(404).json({ response: 'usuario no encontrado' })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
// await new Promise(r => setTimeout(r, 6000))
exports.get_all_users = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ response: users });
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

exports.get_user_by_id = async function (req, res) {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({response: 'Usuario encontrado', data: user })
    } catch (error) {
        res.status(404).json(error)
    }

}

exports.register_user = async function (req, res) {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(404).json({
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
        res.status(500).json({
            error: error
        })
    }
}

