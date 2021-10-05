import React, { useState, useEffect } from "react";
import {
	Formulario,
	ContenedorBotonCentrado,
	Boton,
	// MensajeExito,
	// MensajeError,
} from "../elementos/Formularios";
import FontAwesome from 'react-fontawesome';
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import background from "../assets/background.jpg";
import "../styles/Register.css";
import { changePassword } from "../routes/apiCallsUser";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";

const RestabContraseña = () => {

    const [password, cambiarPassword] = useState({ campo: "", valido: null });
	const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
	const [email, setEmail] = useState({email: ''})
	const location =  useLocation()
	// const [formularioValido, cambiarFormularioValido] = useState(null);
	// const refSpan = useRef(null);

	useEffect(() => {
		setEmail({
			email : location.state.email
		})
	}, [location])



	const expresiones = {
		password: /^.{5,12}$/, // 4 a 12 digitos.
	};

	const validarPassword2 = () => {
		if (password.campo.trim().length > 0) {
			if (password.campo !== password2.campo) {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: "false" };
				});
			} else {
				cambiarPassword2((prevState) => {
					return { ...prevState, valido: "true" };
				});
			}
		}
	};

	const onSubmit = async (e) => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		})

		e.preventDefault();

		if (
			password.valido === "true" &&
			password2.valido === "true"
		) {
			const dataAx = {
				email: email.email,
				password: password.campo
			}
			cambiarPassword({ campo: "", valido: null });
			cambiarPassword2({ campo: "", valido: "null" });

			await changePassword(dataAx).then(r => {
				Toast.fire({
					icon: 'success',
					title: r.data.response
				})
			}).catch(e => {
				Toast.fire({
					icon: 'error',
					title: e.response.data.response
				})
			})
 
		} else {
			Toast.fire({
				icon: 'alert',
				title: 'Las contraseñas no son identicas!'
			})
		}
	};

    return (
        <>
            <img src={background} alt="background" className="myBackgroundLogin" />

            <div className="divForm">
				<p className='title'><FontAwesome name='heartbeat'> SGP </FontAwesome></p>
                <p className='center'><FontAwesome name='heartbeat'>Ingrese su nueva contraseña</FontAwesome></p>

				<main>
					<Formulario action="" onSubmit={onSubmit}>
						<Input
							estado={password}
							cambiarEstado={cambiarPassword}
							tipo="password"
							label="Contraseña"
							placeholder="Contraseña"
							name="password1"
							leyendaError="La contraseña tiene que ser de 5 a 12 dígitos."
							expresionRegular={expresiones.password}
						/>
						<Input
							estado={password2}
							cambiarEstado={cambiarPassword2}
							tipo="password"
							label="Repetir contraseña"
							placeholder="Repertir Contraseña"
							name="password2"
							leyendaError="Ambas contraseñas deben ser iguales."
							funcion={validarPassword2}
						/>

						<ContenedorBotonCentrado>
							<Boton id="btnEnviar"  type="submit">Enviar</Boton>			
						</ContenedorBotonCentrado>
					</Formulario>
				</main>
			</div>
        </>
    );
};


export default RestabContraseña;
