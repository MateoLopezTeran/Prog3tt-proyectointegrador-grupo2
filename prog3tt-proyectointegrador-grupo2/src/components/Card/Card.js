import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoFavoritos: "Agregar a favoritos",
      };
    } 

    componentDidMount() {
        let peliculasConseguidas = localStorage.getItem("pelicula");
        if (peliculasConseguidas === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (peliculasConseguidas.includes(this.props.datosPelicula.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    }

    agregarQuitarFavoritos() {
        let arrayPeliculas = [this.props.datosPelicula.id];
        let peliculasConseguidas = localStorage.getItem("pelicula");
        let peliculasFinales = "";
    
        if (peliculasConseguidas === null) {
          peliculasConseguidas = [];
          peliculasFinales = JSON.stringify(arrayPeliculas);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        let arrayPeliculasFinales = "";
    
        if (peliculasConseguidas.length !== 0) {
          let arrayPeliculasConseguidas = JSON.parse(peliculasConseguidas);
          arrayPeliculasFinales = arrayPeliculasConseguidas.concat(arrayPeliculas);
          peliculasFinales = JSON.stringify(arrayPeliculasFinales);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        if (peliculasConseguidas.includes(this.props.datosPelicula.id)) {
          let arrayPeliculasConseguidas = JSON.parse(peliculasConseguidas);
          arrayPeliculasFinales = arrayPeliculasConseguidas.filter(
            (item) => item !== this.props.datosPelicula.id
          );
          peliculasFinales = JSON.stringify(arrayPeliculasFinales);
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        }
    
        localStorage.setItem("pelicula", peliculasFinales);
      }

    /* filtrarPeliOSerie(textoInput){
      let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
      return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
      })
      this.setState({
        peliculas: peliculasFiltradas
      })
    } */

    verMas() {
      let descripcionPelicula = this.props.datosPelicula.overview
      return descripcionPelicula
    }

    verTodas() {
      fetch(this.state)
        .then((res) => res.json())
        .then((data) =>
        this.setState({
          peliculas: data,
        })
        )
        .catch();
    }

    render() {
        return (
          <article className="peliOSerie">
            <h3>{this.props.datosPelicula.title}</h3>
            <Link to={`/Detail/${this.props.datosPelicula.id}`}>
              <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
            </Link>
            <p className="linkFavoritos" onClick={() => this.verMas(this.props.datosPelicula.id)}>
              Ver más
            </p>
            <Link className="linkFavoritos" to={`/Detail/${this.props.datosPelicula.id}`}>Ir a detalle</Link>
            <button className="linkFavoritos" onClick={() => this.agregarQuitarFavoritos(this.props.datosPelicula.id)}>
              {this.state.textoFavoritos}
            </button>
          </article>
        );
    }
}
export default Card;