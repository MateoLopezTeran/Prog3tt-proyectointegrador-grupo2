import React , {Component} from "react";
import { Link } from "react-router-dom";
import "./Buscador.css"

class Buscador extends Component {
  constructor (props) {
        super(props);
        this.state={
          input: '',
          resultado: []
        }
    }
    
    guardarInput(guardar){
        this.setState({
          valorInput: guardar.target.value
        })
    }

    prevenirDefault (detener){
      detener.preventDefault();
    }

    render(){
      return(
        <form className="formbusqueda" action="./Resultados" method="get" onSubmit={(detener)=> this.prevenirDefault(detener)}>
          <input className="inputbusqueda" name="buscador" type="text" placeholder="Buscar peliculas"
            input={this.state.valorInput}
            onChange={(guardar) => this.guardarInput(guardar)}/>
          <Link to={`/Resultados/${this.state.valorInput}`}>
            <button className="submitbtn" type="submit">Enviar</button>
          </Link>
        </form>
      )
    }
}
export default Buscador;
