import './ButtonSearch.css';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';


function ButtonSearch() {
  return (

      <div className='box'>
        <span>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></span>
        <input type="text" name='search' placeholder=' Buscar habitación, reserva, usuario... etc' autoComplete='off' className='src'>
        </input>
      </div>

  );
}

export default ButtonSearch;