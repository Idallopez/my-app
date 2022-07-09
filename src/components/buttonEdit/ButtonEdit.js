import './ButtonEdit.css'
import '../../index.css'
import { Link } from 'react-router-dom';

function ButtonEdit(){
    return(
      <section class="iconMacro">
        
        <div class=" iconEdit">
          <div class=" iconEdit1">
            <div>
              <p class="numEdit">39</p>
              </div>
              <div class="Edit">
              <i class="fa-solid fa-pen-to-square"></i>
              </div>
          </div>
          <div class=" iconEdit2">
          <Link to="/#">
              <div className='Reserva'>
                <div><h3>Reservar</h3></div>
              </div>
          </Link>
          </div>
        </div>

       
      </section>  
        
    )
}

export default ButtonEdit;