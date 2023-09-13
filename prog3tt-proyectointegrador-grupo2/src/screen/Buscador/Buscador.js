import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Formulario from "../../components/Formulario/Formulario";

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      valorInput: '',
    };
    
  }
 
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            peliculaFavorita: data,
          })
        )
        .catch((err) => console.log(err));
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
