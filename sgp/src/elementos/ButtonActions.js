import Button from "@restart/ui/esm/Button";
import FontAwesome from 'react-fontawesome';

//Se crea el siguiente componente para poder agregar la cantidad de botones que queramos mas facilmente a la pagina.
const ButtonsHome = props => { 
    return (
    <Button  variant="outline-info" className={'buttonsGeneral ' + props.style} onClick={props.onClickDo}>
        <FontAwesome name={props.icon} size='4x' className='iconsHomeColor'/>
        <br/>
         {props.text}
    </Button>
    )
}

export default ButtonsHome;