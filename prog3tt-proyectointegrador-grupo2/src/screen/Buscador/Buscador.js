import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Formulario from "../../components/Formulario/Formulario";

class Buscador extends Component {
  constructor(){
    super();
    this.state = {
         
    }
    /* componentDidMount() {
      fetch('')
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            peliculaFavorita: data,
          })
        )
        .catch((err) => console.log(err));
    } */
  }
  render(){
  return (
    <React.Fragment>
        <Navbar/>
        <Formulario/>

        <h2>Peliculas parecidas a busqueda</h2>
        <section id="pelisPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <h2>Series parecidas a busqueda</h2>
        <section id="seriesPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <Footer/>
    </React.Fragment>
  );
  }
}

export default Buscador;
