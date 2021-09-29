import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Paciente = () => {

    //pacientes hardcodeados, este sprint se toman de la base 

    const [listaPacientes, setPacientes] = useState([

        {
            dni:40163498,
            nombre:'Raul',
            apellido:'Carson'},

        {
            dni:42516864,
            nombre:'Pedro',
            apellido:'head'}

        
    ]);


    return ( 
        <Container>
            {listaPacientes.map(paci => (
                <div>
                    <p>{paci.dni}</p>
                    <p>{paci.nombre}</p>
                    <p>{paci.apellido}</p>
                </div>
            ))}
                
            
        </Container>
    );

}
 
export default Paciente;