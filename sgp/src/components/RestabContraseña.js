import React, { useState } from "react";
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
import { restabContraseña } from "../routes/apiCallsUser";
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';

const RestabContraseña = () => {

    const [password, cambiarPassword] = useState({ campo: "", valido: null });
	const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
	const history = useHistory();
	// const [formularioValido, cambiarFormularioValido] = useState(null);
	// const refSpan = useRef(null);



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
			//cambiarFormularioValido(true);
			const dataAx = {
				password: password.campo
			}
			cambiarPassword({ campo: "", valido: null });
			cambiarPassword2({ campo: "", valido: "null" });

			/* await register(dataAx).then(r => {
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
 */
			// ...
		} else {
			//cambiarFormularioValido(false);
		}
	};

	// const changeRef = () => {
	// 	inputRef.current.disabled = nombre.valido && password.valido && password2.valido && password2.valido
	// }
	const goToLogin = () => {
		history.push('/')
	}


    return (
        <>
            <img src={background} alt="background" className="myBackgroundLogin" />

            <div className="divFormRegister">
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

						{/* {formularioValido === false && (
							<MensajeError>
								<p>
									<FontAwesomeIcon icon={faExclamationTriangle} />
									<b>Error:</b> <span> Formulario Llenado incorrectamente </span>
								</p>
							</MensajeError>
						)} */}
						<ContenedorBotonCentrado>
							<Boton type="submit" onClick={goToLogin}>Enviar</Boton>
						
						</ContenedorBotonCentrado>
					</Formulario>
				</main>
			</div>
        </>
    );
};


export default RestabContraseña;
