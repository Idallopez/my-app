import './AsideBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';

function SideBar(){
  
  return(

      <div class="sidebar" id='Side'>

    <div class="logoContent">
        <div><img src={logo} className="logoHotelia" alt="logo" /></div>
        <div><i class="fa-solid fa-bars" id="btn"></i></div>
    </div>


      <ul id="navList">
      <li>
      <Link to="/#">
        <div className='AsideItem'>
        <div><i class="fa-solid fa-border-all iconSide"></i></div>
          <div class="wordAside"><h3>Dashboard</h3></div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/#">
        <div className='AsideItem'>
        <div><i class="fa-solid fa-hotel iconSide"></i></div>
          <div class="wordAside"><h3>Habitaciones</h3></div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/#">
        <div className='AsideItem'>
        <div><i class="fa-solid fa-user-group iconSide"></i></div>
          <div class="wordAside"><h3>Usuarios</h3></div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/#">
        <div className='AsideItem'>
        <div><i class="fa-regular fa-star iconSide"></i></div>
          <div class="wordAside"><h3>Reservas</h3></div>
        </div>
      </Link>
    </li>
    <li>
      <Link to="/#">
        <div className='AsideItem'>
        <div><i class="fa-regular fa-circle-user iconSide"></i></div>
          <div class="wordAside"><h3>Mi Perfil</h3></div>
        </div>
      </Link>
    </li>
  </ul>


  </div>

  )
  }
  
  export default SideBar;