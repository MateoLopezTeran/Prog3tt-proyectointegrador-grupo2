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
        valorInput: evento.target.value,
        },
        () => this.props.filtro(this.state.valorInput) 
      );
    }
    render(){
      return (
        <form onSubmit={() => this.detenerDefault()}>
        <input
        type='text'
        onChange={() => this.guardarInput()}
        value={this.state.valorInput}
        />
        </form>
      );
    }
}

export default Formulario;