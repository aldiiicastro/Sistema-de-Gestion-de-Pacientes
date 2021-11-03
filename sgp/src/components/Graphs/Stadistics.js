import React from "react";
import '../../styles/PatientList.css';
import NavegationRecepcionista from '../Navegation/RecepcionistNavegation';
import  {Pie} from 'react-chartjs-2'
import  {Bar} from 'react-chartjs-2'

const Stadistics = () => { 
  
        const data ={ 
          type: 'pie',
          labels:['Pacientes atendidos','Pacientes en espera'],
          datasets:[{data:[80,20], //modificar el datasets para traer la informacion real 
          backgroundColor:['rgba(255, 99, 132, 0.2)',
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
          backgroundColor:['rgba(255, 99, 132, 1)',
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

export default Stadistics;