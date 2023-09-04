import React, { Component } from "react";
import Card from "../CharacterCard/CharacterCard";
import "./characters.css";

class Container extends Component {
    constructor() {
      super();
      this.state = {
        peliculas: [], //aparecer personajes
        peliculasFavoritas: [],
      };
    }

    componentDidMount() {
        //BUscamos datos
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
        let peliculasFiltradas = this.state.personajes.filter(
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
            <section className="cardContainer">
              {this.state.peliculas.map((unaPelicula, idx) => (
                <Card
                  key={unaPelicula.name}
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