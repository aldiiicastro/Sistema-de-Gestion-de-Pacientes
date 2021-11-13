import React from 'react';
import { useHistory } from 'react-router';
import { faVirus, faChartBar, faChartLine, faChartPie } from "@fortawesome/free-solid-svg-icons";
import ButtonActions from '../../elementos/ButtonActions';
import NavegationRecepcionista from '../Navegation/RecepcionistNavegation';

const Stadistics = () => {
  const history = useHistory();
  const goToWaittingGraph = () => {
    history.push('/stadistics/waittingGraph')
  };

  const goToEntryGraph = () => {
    history.push('/stadistics/entryGraph')
  };

  const goToDieGraph = () => {
    history.push('/stadistics/deceasedGraph')
  };

  const goToConfirmedGraph = () => {
    history.push('/stadistics/confirmedCases')
  };

  return(
    <React.Fragment>
      <NavegationRecepcionista/>
      <div className='centro marginTop'>
        <h3>Graficos pacientes</h3>
      </div>
      <div className='gridStyle'>
        <ButtonActions id={'confirmedGraph'} text={'Grafico de contagiados'} onClickDo={goToConfirmedGraph} icon={faVirus} isDisabled={false}/>
        <ButtonActions id={'waittingGraph'} text={'Grafico de espera'} onClickDo={goToWaittingGraph} icon={faChartPie} isDisabled={false} />
      </div>
      <div className='gridStyle'>
        <ButtonActions id={'entryGraph'} text={'Grafico de ingresos'} onClickDo={goToEntryGraph} icon={faChartBar} isDisabled={false} />
        <ButtonActions id={'dieGraph'} text={'Grafico de descesos'} onClickDo={goToDieGraph} icon={faChartLine} isDisabled={false} />
      </div>

    </React.Fragment>
  );
};
export default Stadistics;
