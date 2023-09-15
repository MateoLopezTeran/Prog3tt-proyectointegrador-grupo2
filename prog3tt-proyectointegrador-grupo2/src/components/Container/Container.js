import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Formulario from "../Formulario/Formulario";
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
    };

  }

  filtrarPeliOSerie(textoInput){
    console.log(this.state.peliculasFiltradas);
    let peliculasFiltradas = this.state.peliculas.filter(pelicula => {
    return pelicula.title.toLowerCase().includes(textoInput.toLowerCase());
    })
    this.setState({
      peliculas: peliculasFiltradas
    })
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Formulario filtro={(evento)=>this.filtrarPeliOSerie(evento)}/>

        <section className="seccionPeliSerie">
          {this.props.array.map((unaPelicula, idx) => {
            if (this.props.limitePelis) {
              if (idx < 5) {
                return (<Card
                key={unaPelicula.title + idx}
                datosPelicula={unaPelicula}
              />)
            
            } else {return (null)}
            } else {return (<Card
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
            />)
          }})} 
        </section>
        <section className="seccionPeliSerie">
        <Link className="linkADetalle" to={`/VerTodas${this.props.link}`}>Ver todas</Link> {/* incompleto */}
        </section>
      </React.Fragment>
    );
  }
}

export default Container;