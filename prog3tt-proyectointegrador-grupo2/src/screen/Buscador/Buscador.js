import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";

function Buscador() {
  
  return (
    <React.Fragment>
        <Navbar/>

        <h2>Peliculas parecidas a busqueda</h2>
        <section id="pelisPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <h2>Series parecidas a busqueda</h2>
        <section id="seriesPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <Footer/>
    </React.Fragment>
  );
}

export default Buscador;

/* 
import React, { Component } from "react";
import Card from "../Card/Card";

class Buscador extends Component{
    constructor(){
        super();
        this.state = {
          valorInput: '',
        };
    }
    detenerDefault(){
      evento.preventDefault();
    }
    guardarInput(){
      this.setState(
        {
          valorInput: evento.target.value,
        },
        () => this.props.filtro(this.state.valorInput) 
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

export default Buscador;
*/