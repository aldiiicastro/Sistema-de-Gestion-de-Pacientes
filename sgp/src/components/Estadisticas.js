import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../styles/PatientList.css';
import NavegationRecepcionista from './NavegationRecepcionista';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import  {Pie} from 'react-chartjs-2'
import  {Bar} from 'react-chartjs-2'


const Estadisticas = () => { 
  
 

        const data ={
          type: 'pie',
          labels:['Pacientes atendidos','Pacientes en espera'],
          datasets:[{data:[80,20],
          backgraundColor:['rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 0.2)',
        ],borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'],
        borderWidth: 1
          }]
        };




        const data2 ={
          type: 'bar',
          labels:['Pacientes atendidos','Pacientes en espera'],
          datasets:[{data:[80,20],
          backgraundColor:['rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 0.2)',
        ],borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)'],
        borderWidth: 1
          }]
        };
        const opciones={
          responsive: false
        }
        const opciones2={
          responsive: false
        }
            return (
                <React.Fragment>

                <NavegationRecepcionista/>
                <h3>Graficos de Pacientes en lista de espera y atendidos</h3>
                <div className="App">
                <h3>Graficos de Pacientes en lista de espera y atendidos</h3>
               </div>
               
               <div className="App">
               
                 <Pie data={data} opciones={opciones}/>
                 <Bar data={data2} opciones={opciones2}/>

                </div>
                </React.Fragment>
               
             

             );

    
}

export default Estadisticas;