import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Card.css';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoFavoritos: "Agregar a favoritos",
        descripcion: ' '
      };
    } 

    componentDidMount() {
        let peliculasConseguidas = localStorage.getItem("peliculaFavorita");
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
        let peliculasConseguidas = localStorage.getItem("peliculaFavorita");
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
    
        localStorage.setItem("peliculaFavorita", peliculasFinales);
      }

    filtrarPeliOSerie(textoInput){
      let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
      return pelicula.name.toLowerCase().includes(textoInput.toLowerCase());
      })
      this.setState({
        peliculas: peliculasFiltradas
      })
    }

    verMas() {
      if (this.state.descripcion === 'Mostrar descripción') {
        this.setState({
          descripcion: 'Esconder descripción'
        })
      } else {
        this.setState({
          descripcion: 'Mostrar descripción'
        })
      }
    }

    render() {
        return (
          <article className="peliOSerie">
            <h3>{this.props.datosPelicula.title}</h3>
            <Link to={`/Detail/${this.props.datosPelicula.id}`}>
              <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.props.datosPelicula.poster_path}`} alt="imagenPelicula" />
            </Link>
            <button className="linkFavoritos" onClick={() => this.verMas()}>
            {this.state.descripcion === 'Mostrar descripción' ? 'Ver menos' : 'Ver más'}
            </button>
            {this.state.descripcion === 'Mostrar descripción' ? <p>{this.props.datosPelicula.overview}</p>: true}
            <Link className="linkFavoritos" to={`/Detail/${this.props.datosPelicula.id}`}>Ir a detalle</Link>
            <button className="linkFavoritos" onClick={() => this.agregarQuitarFavoritos(this.props.datosPelicula.id)}>
              {this.state.textoFavoritos}
            </button>
          </article>
        );
    }
}
export default Card;