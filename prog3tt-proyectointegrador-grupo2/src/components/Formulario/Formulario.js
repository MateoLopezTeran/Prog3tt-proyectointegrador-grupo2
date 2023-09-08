import React, { Component } from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state = {
          valorInput: '',
        };
    }
    detenerDefault(evento){
      evento.preventDefault();
    }
    guardarInput(evento){
      this.setState(
        {
        valorInput: evento.value,
        },
        () => this.peliculas.filtro(this.state.valorInput) 
      );
    }
    render(){
      return (
        <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
        type='text'
        onChange={(evento) => this.guardarInput(evento)}
        value={this.state.valorInput}
        />
        </form>
      );
    }
}

export default Formulario;