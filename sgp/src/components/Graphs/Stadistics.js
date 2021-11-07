import React, { useEffect, useState } from "react";
import "../../styles/PatientList.css";
import { pacientesEsperando } from "../../routes/apiCallsPatient";
import NavegationRecepcionista from "../Navegation/RecepcionistNavegation";
import { useHistory } from "react-router";
import { atenderPaciente } from "../../routes/apiCallsPatient";
import {
  faClinicMedical,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pie } from "react-chartjs-2";
//import  {Bar} from 'react-chartjs-2'
const Stadistics = () => {
  const [data, setData] = useState([]);
  const data2 = {
    type: "pie",
    labels: ["Pacientes en espera"],
    datasets: [
      {
        data: [data.length], //modificar el datasets para traer la informacion real
        backgroundColor: [ "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };
  /*     const data3 ={
        type: 'bar',
        labels:['Pacientes atendidos','Pacientes en espera'],
        datasets:[{data3:[80,20],
        backgroundColor:['rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 0.2)',
      ],borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)'],
      borderWidth: 1
        }]
      }; */
  const opciones = {
    responsive: false,
  };
  /*   const opciones2={
      responsive: false
    } */
  useEffect(() => {
    pacientesEsperando().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <>
      {data.length !== 0 ? (
        <div>
          <div className="centro">
            <h3>Pacientes en Lista de Espera</h3>
            <br />
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>DNI</th>
                  <th>Accion</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      ) : (
          <div className="noPatient">
            <FontAwesomeIcon icon={faClinicMedical} size="4x" />
            <p>No hay pacientes</p>
          </div>
      )}

      <h3>Graficos de Pacientes en lista de espera y atendidos</h3>
      <div className="App">
        <h3>Graficos de Pacientes en lista de espera y atendidos</h3>
      </div>

      <div className="App">
        <Pie data={data2} opciones={opciones} />
        {/* <Bar data={data2} opciones={opciones2}/> */}
      </div>
    </>
  );
};
export default Stadistics;
