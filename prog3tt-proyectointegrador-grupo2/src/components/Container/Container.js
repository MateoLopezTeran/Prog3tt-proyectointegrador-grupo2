import React, { Component } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
    };

  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <section className="seccionPeliSerie">
          {this.props.array.map((unaPelicula, idx) => {
            if (idx < 5) {
              return (<Card
              key={unaPelicula.title + idx}
              datosPelicula={unaPelicula}
            />)
            } else {return (null)}
          })} 
        </section>
        <section className="seccionPeliSerie">
        <Link className="linkADetalle" to={`/VerTodas/${this.props}`}>Ver todas</Link> {/* incompleto */}
        </section>
      </React.Fragment>
    );
  }
}

export default Container;