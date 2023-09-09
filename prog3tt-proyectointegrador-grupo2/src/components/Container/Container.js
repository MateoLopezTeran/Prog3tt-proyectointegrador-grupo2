import React, { Component } from "react";
import Card from "../Card/Card";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      peliculasFavoritas: [],
      nextUrl: "",
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculas: data.results,
          nextUrl: data.results.next,
        })
      )
      .catch();
  }

  borrarPeliOSerie(id) {
      let peliculasFiltradas = this.state.peliculas.filter(
        (unaPelicula) => unaPelicula.id !== id
      );
      this.setState({
        peliculas: peliculasFiltradas,
      });
  }

   filtrarPeliOSerie(textoInput){
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
        return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
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
        <button className="linkADetalle" onClick={() => this.traerMas()}> Traer más </button>
      </React.Fragment>
    );
  }
}

export default Container;