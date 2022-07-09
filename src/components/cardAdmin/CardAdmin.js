import './CardAdmin.css'
import '../../index.css'
import { Link } from "react-router-dom";
import ButtonStar from '../buttonStar/ButtonStar';
import IconService from '../iconService/IconService';
import ButtonEdit from '../buttonEdit/ButtonEdit';


function CardAdmin(){
    return(
        

    <section class="grid-container-gen" >

        <div id='gridGeneral'>
              <div class="container-fila">
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
        </div>

        <div class="container-fila">
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
                  <div class="card">
                        <figure>
                                      <div class="img-carti">
                                      <Link to="/my-app/src/recursosMA/recursosMA.js">
                                          <img src={"https://static.abc.es/Media/201504/27/hotel12--644x362.jpg"} alt="ciencias"/>
                                          <button class="btn-orange">
                                          <h5>Precio 50.000$/Noche</h5>
                                          </button>
                                      </Link>
                                      </div>
                      </figure>
                          <div class="contenido-card">
                            <ButtonStar/>
                            <IconService/>
                            <ButtonEdit/>
                            
                        </div>
                  </div>
        </div>

      </div>
    </section>
        
    )
}

export default CardAdmin