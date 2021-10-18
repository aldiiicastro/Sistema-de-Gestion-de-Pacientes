const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 * Como anotación, deberiamos modificar las responses en caso de errores, hoy por hoy esta devolviendo un objeto completo.
 * Lo mismo para usuarios, los endpoints no deberian devolver el id y contraseñas.
 */

exports.login_user = async function (req, res) {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(404).json({
                response: 'Revisar campos y/o sus datos'
            })
        }
        const findUser = await User.findOne({ email: req.body.email, password: req.body.password })

        findUser ? res.status(202).json({ response: 'Usuario logueado', data: findUser.id }) : res.status(406).json({ response: 'Usuario no encontrado' })
    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}
// await new Promise(r => setTimeout(r, 6000))
exports.get_all_users = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ response: 'todos los usuarios', data: users });
    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.get_user_by_id = async function (req, res) {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({ response: 'Usuario encontrado', data: {name: user.name, email: user.email, receptionist: user.receptionist, doctor: user.doctor} })
    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}
 
exports.get_user_by_email = async function (req, res) {
    try {
        const user = await User.findOne({email: req.params.email} );
        res.status(200).json({ response: 'Usuario encontrado', data: user })
    } catch (error) {
        res.status(500).json({
            response: 'Hola'
        })
    }
}

exports.register_user = async function (req, res) {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || (!req.body.doctor && !req.body.receptionist)) {
            return res.status(404).json({
                response: 'Revisar campos y/o sus datos'
            })
        }

        const findUser = await User.findOne({ email: req.body.email })

        if (findUser) {
            res.status(406).json({
                response: 'Usuario ya creado para este email'
            })
        } else {
            const user = await User.create({ name: req.body.name, email: req.body.email, password: req.body.password, receptionist: req.body.receptionist, doctor: req.body.doctor })
    
            res.status(200).json({
                response: 'Usuario registrado con exito',
                user: user
            })
        }


    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.delete_user = async function (req, res) {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                response: 'No se pasó ningún Id como parametro'
            })
        }

        await User.deleteOne({ _id: req.params.id });

        res.status(200).json({ response: 'Usuario eliminado correctamente!' })

    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.delete_user_byEmail = async function (req, res) {
    try {
        if (!req.params.email) {
            return res.status(400).json({
                response: 'No se pasó ningún Id como parametro'
            })
        }

        await User.deleteOne({ email: req.params.email });

        res.status(200).json({ response: 'Usuario eliminado correctamente!' })

    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.mail_registered = async function(req, res) {
    try {
        if (!req.body.email) {
            return res.status(400).json({
                response: 'No se pasó ningún mail como data'
            });
        }

        let findUser = await User.findOne({ email: req.body.email })

        if(!findUser) {
            return res.status(404).json({
                response: "Email no encontrado!"
            })
        }

        res.status(200).json({
            response: `Email encontrado!`
        });
    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

exports.change_password = async function(req, res) {
    try {
        if (!req.body.email) {
            return res.status(400).json({
                response: 'No se pasó ningún mail como data'
            });
        }

        if (!req.body.password) {
            return res.status(400).json({
                response: 'No se pasó ningún password como data'
            });
        }

        let findUser = await User.findOne({ email: req.body.email })
        
        await User.updateOne({_id: findUser._id}, {
            password: req.body.password
        })

        res.status(200).json({
            response: `Tú contraseña, fue cambiada exitosamente!`
        })

    } catch (error) {
        res.status(500).json({
            response: 'Error en el sistema'
        })
    }
}

