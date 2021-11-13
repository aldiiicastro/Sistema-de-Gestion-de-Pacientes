import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Se crea el siguiente componente para poder agregar la cantidad de botones que queramos mas facilmente a la pagina.
const ButtonsHome = props => { 
    return (
    <Button  variant="outline-info"  id={props.id} className={'btn btn-block btnStyle' } onClick={props.onClickDo} disabled={props.isDisabled}>
        <FontAwesomeIcon icon={props.icon} size='4x' className='iconsHomeColor'/>
        <br/>
         {props.text}
    </Button>
    )
}

export default ButtonsHome;