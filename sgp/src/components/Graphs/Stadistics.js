import React, { useEffect, useState } from "react";
import "../../styles/PatientList.css";
import { pacientesEsperando } from "../../routes/apiCallsPatient";
import NavegationRecepcionista from "../Navegation/RecepcionistNavegation";
import {
  faClinicMedical,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Pie } from "react-chartjs-2";
import  {Bar} from 'react-chartjs-2'

const Stadistics = () => {
  const [data, setData] = useState([]);
  const data2 = {
    type: "bar",
    labels: ["Pacientes en espera"],
    datasets: [
      {
        label:"Pacientes en espera",
        data: [data.length], 
        backgroundColor: [ "rgba(229, 112, 126, 0.5)"],
        borderColor: ["rgba(229, 112, 126, 0.2)"],
        borderWidth: 2,
      },
    ],
  };

  const opciones = {
    responsive: false,
  };
 
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
            <br /><br />
  
          </div>
        </div>
      ) : (
          <div className="noPatient">
            <FontAwesomeIcon icon={faClinicMedical} size="4x" />
            <p>No hay pacientes</p>
          </div>
      )}

      <div className="centro"><br /><br />
        <h3>Graficos de Pacientes en lista de espera</h3>
      </div>

      <div className="App">
        <Bar data={data2} opciones={opciones} />
        {/* <Bar data={data2} opciones={opciones2}/> */}
      </div>
    </>
  );
};
export default Stadistics;
