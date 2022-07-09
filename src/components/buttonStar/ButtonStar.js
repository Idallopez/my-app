import './ButtonStar.css'
import '../../index.css'

function ButtonStar(){
    return(
      
      <div class="center">
      <div class="stars">
        <input type="radio" id="five" name="rate" value="5"></input>
        <label for="five"></label>
        <input type="radio" id="four" name="rate" value="4"></input>
        <label for="four"></label>
        <input type="radio" id="three" name="rate" value="3"></input>
        <label for="three"></label>
        <input type="radio" id="two" name="rate" value="2"></input>
        <label for="two"></label>
        <input type="radio" id="one" name="rate" value="1"></input>
        <label for="one"></label>
        <span class="result"></span>
      </div>
   </div>

      
    )
}

export default ButtonStar;



 