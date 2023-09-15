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
      },
      () => console.log(this.state.input)
    );
  }

  render() {
    return (
      <form className="formbusqueda" action="" onSubmit={(e) => this.envio(e)}>
        <input classname="inputbusqueda" placeholder="Filter Movies" type="text" name="filtro"
          onChange={(e) => this.reasignarInput(e)}
          value={this.state.input}
        />
        <button className="submitbtn" type="submit">
          Filtrar
        </button>
      </form>
    );
  }
}

export default Filtro;