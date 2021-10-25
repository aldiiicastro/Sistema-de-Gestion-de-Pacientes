import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { updateFirstLog } from '../routes/apiCallsUser';
import '../styles/Tutorial.css';

const TutorialRecepcionista = (props) => {

    const [show, setShow] = useState(props.show);
    const [showIngresarPaciente, setIngresarPaciente] = useState(false);
    const [showBajaPaciente, setBajaPaciente] = useState(false);
    const [showEstadisticas, setEstadisticas] = useState(false);

    const handleClose = () => {
        setShow(true);
        setIngresarPaciente(false);
        setBajaPaciente(false);
        setEstadisticas(false);
        //update fisrt log
        updateFirstLog(props.id)
        .then(res => {
            console.log(res);
        })
        .catch(res => {
            console.log(res);
        });
    }
    
    const handleNext = (next) => {
        if(next === 'ingresar'){
            setShow(true);
            setIngresarPaciente(true);
        } else if(next === 'baja'){
            setShow(true);
            setIngresarPaciente(false);
            setBajaPaciente(true);
        } else if(next === 'estadistica') {
            setShow(true);
            setIngresarPaciente(false);
            setBajaPaciente(false);
            setEstadisticas(true);
        }
        
    }
    return (
        <>
        <Modal
            {...props}
            size="lg"
            show={!show ? props.show : false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Bienvenido/a {props.nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Como recepcionista vas a poder:</h4>
                <p>
                    Agregar un paciente
                </p>
                <p>
                    Dar de baja un paciente
                </p>
                <p>
                   Ver estadisticas
                </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('ingresar')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>
            {/** Modal agregar paciente */}
            <Modal
            size="lg"
            show={showIngresarPaciente}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar paciente 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                Este boton te enviara a un formulario donde deberas completar todos los datos de las personas.
                Asi como los sintomas con los que se presenta.
                Una vez finalizada la carga, haz click sobre el boton Ingresar y listo, cargaras el paciente al sistema.
                </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('baja')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>
            {/** Modal dar de baja */}
            <Modal
            size="lg"
            show={showBajaPaciente}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Dar de baja un paciente
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    Aqui veras una lista de todos los pacientes que puedes dar de baja, es muy sencillo, 
                    solo debes oprimir el boton Dar de Baja y lo eliminaras del sistema.
                </p>
                
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('estadistica')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>

            {/** Modal terminar turno */}
            <Modal
            size="lg"
            show={showEstadisticas}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Ver estadisticas
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    En esta seccion, te mostraremos distintos graficos con los que podras ver la informacion de forma mas rapida y sencilla.
                </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="danger">Terminar</Button>
            </Modal.Footer>
            </Modal>
            </>
    );
  }
  
 export default TutorialRecepcionista;