import React from 'react';
import { Form } from 'react-bootstrap';
import {LeyendaError, IconoValidacion} from './Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Control = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo.trim())){
				cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
				<Form.Control 
					className= "boxInput"
					type={tipo}
					placeholder={placeholder} 
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}
 
export default Control;