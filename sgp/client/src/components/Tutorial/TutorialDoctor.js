import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import { updateFirstLog } from '../../routes/apiCallsUser';
import '../../styles/Tutorial.css';

const TutorialDoctor = (props) => {

    const [show, setShow] = useState(props.show);
    const [showListaPacientes, setListaPaciente] = useState(false);
    const [showComenzarTurno, setComenzarTurno] = useState(false);
    const [showTerminarTurno, setTerminarTurno] = useState(false);

    const handleClose = () => {
        setShow(false);
        setListaPaciente(false);
        setComenzarTurno(false);
        setTerminarTurno(false);
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
        if(next === 'espera'){
            setShow(false);
            setListaPaciente(true);
        } else if(next === 'comenzar'){
            setShow(false);
            setListaPaciente(false);
            setComenzarTurno(true);
        } else if(next === 'terminar') {
            setShow(false);
            setListaPaciente(false);
            setComenzarTurno(false);
            setTerminarTurno(true);
        }
        
    }
    return (
        <>
        <Modal
            {...props}
            size="lg"
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Bienvenido/a {props.nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Como Doctor vas a poder:</h4>
                <p>
                    Ver la lista de pacientes actuales.
                </p>
                <p>
                    Atender a los pacientes.
                </p>
                <p>
                    Internar un paciente asi como darles el Alta.
                </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('espera')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>
            {/** Modal lista de espera */}
            <Modal
            size="lg"
            show={showListaPacientes}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header" >
                <Modal.Title id="contained-modal-title-vcenter">
                Ver lista de Pacientes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    Muestra una tabla con los pacientes en espera. Tendras 2 botones con los que podras realizar
                    las siguientes acciones.
                </p>
                <p>
                    Derivar un paciente a Atención.
                </p>
                <p>
                    Editar los datos del paciente.
                </p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('comenzar')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>
            {/** Modal Comenzar turno */}
            <Modal
            size="lg"
            show={showComenzarTurno}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Comenzar Turno
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    Con este boton podra seleccionar que a dado por comenzado el turno de un paciente.
                </p>
                
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleNext('terminar')}>Siguiente</Button>
                <Button onClick={handleClose}>Omitir</Button>
            </Modal.Footer>
            </Modal>

            {/** Modal terminar turno */}
            <Modal
            size="lg"
            show={showTerminarTurno}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            >
            <Modal.Header className="modal-header">
                <Modal.Title id="contained-modal-title-vcenter">
                    Finalizar Turno
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    Aqui si lo considera podra dar por finalizado el turno.
                </p>
               
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="danger">Terminar</Button>
            </Modal.Footer>
            </Modal>
            </>
    );
  }
  
 export default TutorialDoctor;
