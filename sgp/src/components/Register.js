
import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input'
import background from '../assets/background.jpg'
import '../styles/Register.css'


const Register = () => {
	const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
	const [password, cambiarPassword] = useState({ campo: '', valido: null });
	const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
	const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {
		if (password.campo.length > 0) {
			if (password.campo !== password2.campo) {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: 'false' }
				});
			} else {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: 'true' }
				});
			}
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true'
		) {
			cambiarFormularioValido(true);
			cambiarNombre({ campo: '', valido: null });
			cambiarPassword({ campo: '', valido: null });
			cambiarPassword2({ campo: '', valido: 'null' });
			cambiarCorreo({ campo: '', valido: null });
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<>
			<img src={background} alt="background" className="myBackgroundLogin"></img>
			<div className="divFormRegister">
				<main>
					<Formulario action="" onSubmit={onSubmit}>
						<Input
							estado={nombre}
							cambiarEstado={cambiarNombre}
							tipo="text"
							label="Nombre"
							placeholder="Nombre"
							name="usuario"
							leyendaError="El nombre solo puede contener letras y espacios."
							expresionRegular={expresiones.nombre}
						/>
						<Input
							estado={correo}
							cambiarEstado={cambiarCorreo}
							tipo="email"
							label="Correo Electrónico"
							placeholder="Email"
							name="correo"
							leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
							expresionRegular={expresiones.correo}
						/>
						<Input
							estado={password}
							cambiarEstado={cambiarPassword}
							tipo="password"
							label="Contraseña"
							placeholder="Contraseña"
							name="password1"
							leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
							expresionRegular={expresiones.password}
						/>
						<Input
							estado={password2}
							cambiarEstado={cambiarPassword2}
							tipo="password"
							label="Repetir Contraseña"
							placeholder="Contraseña"
							name="password2"
							leyendaError="Ambas contraseñas deben ser iguales."
							funcion={validarPassword2}
						/>

						{formularioValido === false && <MensajeError>
							<p>
								<FontAwesomeIcon icon={faExclamationTriangle} />
								<b>Error:</b> Formulario Llenado incorrectamente
							</p>
						</MensajeError>}
						<ContenedorBotonCentrado>
							<Boton type="submit">Enviar</Boton>
							{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
						</ContenedorBotonCentrado>
					</Formulario>
				</main>
			</div>
		</>
	);
}

export default Register;