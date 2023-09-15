import React, { Component } from "react";
import Container from "../Container/Container";
import Formulario from "../Formulario/Formulario";
import './Buscador.css'

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      valorInput: '',
      peliculas: [],
      peliculasFiltradas: []
    };
    
  }
  
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
        .then((res) => res.json())
        .then((data) =>
          console.log(data)
        )
        .catch((err) => console.log(err));
    }

    filtrarPeliOSerie(textoInput){
      console.log(this.state.peliculasFiltradas);
      let peliculasFiltradas = this.state.peliculasFiltradas.array.filter(pelicula => {
      return pelicula.title.toLowerCase().includes(textoInput.toLowerCase());
      })
      this.setState({
        peliculas: peliculasFiltradas
      })
    }
  
  render(){
  return (
    <React.Fragment>

        <Formulario filtro={(evento)=>this.filtrarPeliOSerie(evento)}/>

        <h2>Peliculas parecidas a busqueda</h2>
        <section id="pelisPopulares" class="seccionPeliSerie"></section>
        <Container array= {this.state.peliculas}/>

      
    </React.Fragment>
  );
  }
}

export default Buscador;