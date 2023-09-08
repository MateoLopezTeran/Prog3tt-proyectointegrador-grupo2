import React, { Component } from "react";
import Card from "../Card/Card";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      peliculasFavoritas: [],
      series: [],
      seriesFavoritas: [],
      nextUrl: "",
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculas: data.results,
          nextUrl: data.results.next,
        })
      )
      .catch();

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          series: data.results,
          nextUrl: data.results.next,
        })
      )
      .catch();
  }

  borrarPeliOSerie(id) {
      let peliculasFiltradas = this.state.peliculas.filter(
        (unaPelicula) => unaPelicula.id !== id
      );
      let seriesFiltradas = this.state.series.filter(
        (unaSerie) => unaSerie.id !== id
      );
      this.setState({
        peliculas: peliculasFiltradas,
        series: seriesFiltradas,
      });
  }

   filtrarPeliOSerie(){
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
        return pelicula.name.toLowerCase().includes();
    })
    this.setState({
      peliculas: peliculasFiltradas
    })
  }

  traerMas() {
    fetch(this.state.nextUrl)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculas: data.results.concat(this.state.peliculas),
          nextUrl: data.results.next,
        })
      )
      .catch();
  }

  render() {
    console.log(this.state.peliculasFavoritas);
    return (
      <React.Fragment>
        <section className="seccionPeliSerie">
          {this.state.peliculas.map((unaPelicula, idx) => {
            if (idx < 5) {
              return (<Card
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
              borrar={(id) => this.borrarPeliOSerie(id)}
            />)
            } else {return (null)}
          })}
        </section>
        <button onClick={() => this.traerMas()}> Traer más </button>

        {/* <section className="seccionPeliSerie">
          {this.state.series.map((unaSerie, idx) => {
            if (idx < 5) {
              return (<Card
              key={unaSerie.title + idx}
              datosSerie={unaSerie}
              borrar={(id) => this.borrarPeliOSerie(id)}
            />)
            } else {return (null)}
          })}
        </section>
        <button onClick={() => this.traerMas()}> Traer más </button> */}
      </React.Fragment>
    );
  }
}

export default Container;