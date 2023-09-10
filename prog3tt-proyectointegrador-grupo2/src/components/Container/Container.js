import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      peliculasFavoritas: [],
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculas: data.results,
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

/*   verMas(id){
    let verMasPeliculas = this.state.peliculas.filter(
      (peliculas) => peliculas.id !== id
    );
    this.setState({
      peliculas: peliculasFiltradas
    }) 
  } */

   filtrarPeliOSerie(textoInput){
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
        return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
    })
    this.setState({
      peliculas: peliculasFiltradas
    })
  }

  verTodas() {
    fetch(this.state)
      .then((res) => res.json())
      .then((data) =>
      this.setState({
        peliculas: data.results,
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
              verMas={(id) => this.verMas(id)}
            />)
            } else {return (null)}
          })}
        </section>
        <Link className="linkADetalle" to="/VerTodas">Ver todas</Link>
      </React.Fragment>
    );
  }
}

export default Container;