import React, { Component } from "react";
import "./Filtro.css";

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  envio(event) {
    event.preventDefault();
    this.props.handle(this.state.input);
  }

  reasignarInput(evento) {
    this.setState(
      {
        input: evento.target.value,
      }
    );
  }

  render() {
    return (
      <form className="formbusqueda" onSubmit={(filtrar) => this.envio(filtrar)}>
        <input classname="inputbusqueda" type="text" placeholder="Filtrar peliculas"
          onChange={(filtrar) => this.reasignarInput(filtrar)}
          resultado={this.state.input}
        />
        <button className="submitbtn" type="submit">
          Filtrar
        </button>
      </form>
    );
  }
}

export default Filtro;