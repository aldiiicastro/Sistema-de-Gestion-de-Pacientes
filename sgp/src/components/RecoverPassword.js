import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/Login.css';
import { useHistory } from 'react-router';
import background from '../assets/background.jpg';
import { mailRegistered } from '../routes/apiCallsUser';
import FontAwesome from 'react-fontawesome';
import Swal from 'sweetalert2';

const RecoverPassword = () => {

    const history = useHistory();
    const inputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [data, setData] = useState({
        email: ''
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        inputRef.current.disabled = !checkEmail()
    };


    const checkEmail = () => {
        const emailInput = (emailRef.current.value).trim()
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailInput.length >= 5 && re.test(String(emailInput).toLowerCase())
    };

    const goToHome =  (event) => {
        event.preventDefault();
        history.push("/")
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        await mailRegistered(data).then( r =>{
            history.push({
                pathname: "/restabContraseña",
                state: data
            })
        })
        .catch(e => {
            Toast.fire({
                icon: 'error',
                title: e.response.data.response
            })
        })
    }


    return (
        <>
            <img src={background} alt="background" className="myBackgroundLogin" />

            <div className="divFormLogin">

                <p className='title'><FontAwesome name='heartbeat'> SGP </FontAwesome></p>
                <p className='center'> ¿Olvidaste tu contraseña?</p>

                <Form className="mainForm" onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className="boxInput" name="email" onChange={handleInputChange} placeholder="Email" />
                    </Form.Group>


                    <Button id="btnReestablecer" className="boton" ref={inputRef} variant="success" type="submit">
                        Reestablecer contraseña
                    </Button>
                    <hr />
                </Form>
                <Button id="btnLog" className="boton" variant="success" onClick={goToHome}>
                    Ir a Login
                </Button>
            </div>
        </>
    );
};


export default RecoverPassword;
