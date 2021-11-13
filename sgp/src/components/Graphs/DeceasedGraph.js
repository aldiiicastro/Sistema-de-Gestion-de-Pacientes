import React, { useEffect, useState } from "react";
import "../../styles/PatientList.css";
import { deceasedPatients } from "../../routes/apiCallsPatient";
import NavegationRecepcionista from "../Navegation/RecepcionistNavegation";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart, Bar } from 'react-chartjs-2';
import lodash from 'lodash';
import moment from "moment";


const DeceasedGraph = () => {

  Chart.defaults.color = 'black';
  const [data, setData] = useState([]);

  const deceasedFilter = () => {
    const res = data.filter((objeto => {
        if (objeto.turnState === 'DECEASED') {
          return objeto;
        }
        return 0;
      }))

    const sort = lodash.sortBy(res, (o) => {
        return o.entryDate
    })
    const groupByDay = Object.values(lodash.groupBy(sort, 'entryDate'))
    const newArray = []
      
    groupByDay.forEach( t => {
        newArray.push(t.length)
    })
    
    return newArray
  } 

  const getDays = () => {
    let postFormat = []
    const res = data.filter((objeto => {
        if (objeto.turnState === 'DECEASED') {
          return objeto;
        }
        return 0;
      }))

    const groupByDay = Object.keys(lodash.groupBy(res, 'entryDate'))
    const sort = lodash.sortBy(groupByDay, (o) => {
        return o
    })
    
    sort.forEach( s => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        postFormat.push((new Date(s)).toLocaleDateString('es-ES', options))
    })
    
    return postFormat
  }



  const grafico = {
    type: "bar",
    labels: getDays(),
    datasets: [
      {
        label: "Pacientes en espera",
        data: deceasedFilter(),
        backgroundColor: ["rgba(255, 255, 255, 0.8)"],
        borderColor: ["rgba(0,0,0,0.5)"],
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {

    deceasedPatients().then((res) => {
      setData(res.data.data);

    });
  }, []);

  return (
    <>
      <NavegationRecepcionista />


      {deceasedFilter().length !== 0 ? (
        <div>
          <br />
          <div className="centro">
            <h3>Graficos de Pacientes fallecidos</h3>
            <br />
            <br />
            <div className="centrar">
              <Bar data={grafico} />
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
export default DeceasedGraph;
