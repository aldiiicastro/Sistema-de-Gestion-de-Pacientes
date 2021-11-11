import React, { useEffect, useState } from 'react';
import '../../styles/EntryGraph.css'
import lodash from 'lodash'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { Chart, Bar } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import { allPatient } from '../../routes/apiCallsPatient'
import NavegationRecepcionista from '../Navegation/RecepcionistNavegation';

const EntryGraph = () => {
    Chart.defaults.color = 'rgba(0,0,0,1)'
    const [dataGraph, setDataGraph] = useState([])
    const [labelsGraph, setLabelsGraph] = useState([])
    
    useEffect(() => {
        const labelsPerDay = [];
        const amountOfPatientsPerDay = [];
        allPatient().then((response) => {
            const entryPatients = lodash.chain(response.data.data).groupBy("entryDate").map((value, key) => ({ date: key, patients: value })).value()
            entryPatients.map((values) => {
                amountOfPatientsPerDay.push(values.patients.length);
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                labelsPerDay.push((new Date(values.date)).toLocaleDateString('es-ES', options));
                return '';
            })
            setDataGraph(amountOfPatientsPerDay);
            setLabelsGraph(labelsPerDay);
        })
    }, [])

    const state = {
        labels: labelsGraph.slice(labelsGraph.length - 7),
        datasets: [
            {
                label: 'Pacientes ingresados',
                BarTension: 0.5,
                color: 'rgba(0,0,0,1)',
                backgroundColor: 'rgb(36, 129, 24)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: dataGraph.slice(dataGraph.length - 7),

            }
        ]
    }

    return (
        <>
            <NavegationRecepcionista />
            <Container className='marginTop'>
                <div className="centerEntryTitle">
                    <h3>Cantidad de pacientes ingresados</h3>
                    <h4>Últimos 7 días</h4>
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
                            <div className='centerEntryGraph'> 
                                <Bar
                                    data={state}
                                    options={{
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            color: 'black',
                                        }
                                    }}
                                />
                            </div>)}
            </Container>
        </>
    );
}

export default EntryGraph;