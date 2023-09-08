import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CardSerie extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textoFavoritos: "Agregar a favoritos",
      };
    }

    componentDidMount() {
        let seriesConseguidas = localStorage.getItem("serie");
        if (seriesConseguidas === null) {
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        } else if (seriesConseguidas.includes(this.props.datosSerie.id)) {
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    }

    agregarQuitarFavoritos() {
        let arraySeries = [this.props.datosSerie.id];
        let seriesConseguidas = localStorage.getItem("serie");
        let seriesFinales = "";
    
        if (seriesConseguidas === null) {
          seriesConseguidas = [];
          seriesFinales = JSON.stringify(arraySeries);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        let arraySeriesFinales = "";
    
        if (seriesConseguidas.length !== 0) {
          let arraySeriesConseguidas = JSON.parse(seriesConseguidas);
          arraySeriesFinales = arraySeriesConseguidas.concat(arraySeries);
          seriesFinales = JSON.stringify(arraySeriesFinales);
          this.setState({
            textoFavoritos: "Quitar de favoritos",
          });
        }
    
        if (seriesConseguidas.includes(this.props.datosSerie.id)) {
          let arraySeriesConseguidas = JSON.parse(seriesConseguidas);
          arraySeriesFinales = arraySeriesConseguidas.filter(
            (item) => item !== this.props.datosSerie.id
          );
          seriesFinales = JSON.stringify(arraySeriesFinales);
          this.setState({
            textoFavoritos: "Agregar a favoritos",
          });
        }
    
        localStorage.setItem("serie", seriesFinales);
    }

    render() {
        return (
          <article className="peliOSerie">
            <h3>{this.props.datosSerie.name}</h3>
            <Link to={`/Detail/${this.props.datosSerie.id}`}>
              <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.props.datosSerie.poster_path}`} alt="imagenSerie" />
            </Link>
            <p className="linkADetalle">Ver más</p>
            <p className="linkADetalle" onClick={() => this.props.borrar(this.props.datosSerie.id)}>
              Borrar
            </p>
            <button className="linkADetalle" onClick={() => this.agregarQuitarFavoritos(this.props.datosSerie.id)}>
              {this.state.textoFavoritos}
            </button>
          </article>
        );
    }
}
export default CardSerie;