import React, { useEffect, useState } from "react";
import "../../styles/PatientList.css";
import { waitingAttendingPatients } from "../../routes/apiCallsPatient";
import NavegationRecepcionista from "../Navegation/RecepcionistNavegation";
import {faClinicMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {Bar} from 'react-chartjs-2'

const WaittingGraph = () => {
  
const [data, setData] = useState([]);
  
const waittingFilter = data.filter((objeto => {

  if(objeto.turnState ==='WAITTING')
  {
    return objeto;
  }
  return 0;
}))



const grafico = {
type: "bar",
labels: ["Pacientes en Espera"],
datasets: [
  {
    label:"Pacientes en espera",
    data: [waittingFilter.length], 
    color: 'rgba(0,0,0,1)',
    backgroundColor: [ "rgba(255, 255, 255, 0.8)"],
    borderColor: ["rgba(0,0,0,0.5)"],
    borderWidth: 2,
  },
],
};

const opciones = {
labels: {display:false}
};



useEffect(() => {

  waitingAttendingPatients().then((res) => {
  setData(res.data.data);

});
},[]);

return (
  <>
    <NavegationRecepcionista/>


    {waittingFilter.length !== 0 ? (
      <div>
        <br/>
        <div className="centro">
          <h3>Graficos de Pacientes en lista de espera</h3>
          <br/>
          <br/>
          <div className="centrar">
            <Bar data={grafico} options={opciones} />
          </div>
        </div>
      </div>
    ) : (
        <div className="noPatient">
          <FontAwesomeIcon icon={faClinicMedical} size="4x" />
          <p>No hay pacientes</p>
        </div>
    )}
  </>
  );
};
export default WaittingGraph;
