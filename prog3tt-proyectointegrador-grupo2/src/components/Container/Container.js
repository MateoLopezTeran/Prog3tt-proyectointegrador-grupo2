import React, { Component } from "react";
import Card from "../Card/Card";

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

  render() {
    console.log(this.state.peliculasFavoritas);
    return (
      <React.Fragment>
        <button onClick={() => this.traerMas()}> Traer más </button>
        <section className="seccionPeliSerie">
          {this.state.peliculas.map((unaPelicula, idx) => (
            <Card
              key={unaPelicula.name + idx}
              datosPelicula={unaPelicula}
              borrar={(id) => this.borrar(id)}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default Container