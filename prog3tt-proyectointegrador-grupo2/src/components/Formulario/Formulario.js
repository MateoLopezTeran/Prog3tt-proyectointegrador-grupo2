import React, { Component } from "react";
import './Formulario.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Formulario extends Component{
    constructor(props){
        super(props);
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
      
        <section className='Formulario'>
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input className="input" type="text" placeholder="Buscar" onChange={(evento) =>this.guardarInput(evento)} value={this.state.busqueda}/>
                <Link to = {`/Buscador/${this.state.busqueda}`}><button className='boton'>Buscar</button></Link>
            </form>
        </section>
        
      );
    }
}

export default Formulario;