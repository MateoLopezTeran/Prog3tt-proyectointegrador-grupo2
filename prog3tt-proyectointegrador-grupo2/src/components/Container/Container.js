import React, { Component } from "react";
import Card from "../Card/Card";
import Formulario from "../Formulario/Formulario";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      peliculasFavoritas: [],
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculas: data.results,
        })
      )
      .catch();
  }

  borrar(id) {
      let peliculasFiltradas = this.state.peliculas.filter(
        (unaPelicula) => unaPelicula.id !== id
      );
      this.setState({
        peliculas: peliculasFiltradas,
      });
  }

   filtrarPelioSerie(textoInput){
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
        return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
    })
    this.setState({
      peliculas: peliculasFiltradas
    })
  } 

  render() {
    console.log(this.state.peliculasFavoritas);
    return (
      <React.Fragment>
        <Formulario filtro ={(texto) => this.filtrarPelioSerie(texto)}/>
        <section className="seccionPeliSerie">
          {this.state.peliculas.map((unaPelicula, idx) => {
            if (idx < 5) {
              return (<Card
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
              borrar={(id) => this.borrar(id)}
            />)
            } else {return (null)}
          })}
        </section>
        <button onClick={() => this.traerMas()}> Traer más </button>
      </React.Fragment>
    );
  }
}

export default Container;