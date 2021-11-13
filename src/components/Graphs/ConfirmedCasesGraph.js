import React, { useEffect, useState } from 'react';
import '../../styles/ConfirmedCasesGraph.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { Chart, Pie } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import lodash from 'lodash'
import { confirmedPatients } from '../../routes/apiCallsPatient'
import NavegationRecepcionista from '../Navegation/RecepcionistNavegation';

const ConfirmedCasesGraph = () => {
    Chart.defaults.color = 'rgba(0,0,0,1)';
    const [dataGraph, setDataGraph] = useState([]);
    const [labelsGraph, setLabelsGraph] = useState([]);
    
    useEffect(() => {
        const labelsPerDay = [];
        const amountConfirmedPatientPerDay = [];
        confirmedPatients().then((response) => {
            const confirmedCases = lodash.chain(response.data.data).groupBy("confirmedDate").map((value, key) => ({ date: key, patients: value })).value()
            confirmedCases.map((values) => {
                amountConfirmedPatientPerDay.push(values.patients.length);
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                labelsPerDay.push((new Date(values.date)).toLocaleDateString('es-ES', options));
                return '';
            })
            setDataGraph(amountConfirmedPatientPerDay);
            setLabelsGraph(labelsPerDay);
        })
    }, [])

    const state = {
        labels: labelsGraph/*.slice(labelsGraph.length - 7)*/,
        datasets: [
            {
                label: 'Pacientes confirmados',
                pieTension: 0.5,
                color: 'rgba(0,0,0,1)',
                backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: dataGraph//.slice(dataGraph.length - 7),

            }
        ]
    }

    return (
        <>
            <NavegationRecepcionista />
            <Container className='marginTop'>
                <div className="centerTitle">
                    <h3>Cantidad de pacientes contagiados</h3>
                </div>
                {
                    dataGraph.length === 0 ? (
                        (
                            <div className="noPatient">
                                <FontAwesomeIcon icon={faClinicMedical} size="4x" />
                                <p>No hay pacientes</p>
                            </div>
                        )
                    ) :
                        (
                            <div className='centerGraph'>
                                <Pie
                                    data={state}
                                    options={{
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            color: 'black',
                                        }
                                    }}
                                />
                            </div>
                        )
                }
            </Container>
        </>
    );
}

export default ConfirmedCasesGraph;