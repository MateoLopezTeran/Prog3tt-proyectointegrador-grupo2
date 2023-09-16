import React, { Component } from "react";
import Container from "../../components/Container/Container";
import './Home.css'
import Buscador from "../../components/Buscador/Buscador";


class Home extends Component {
  constructor(){
    super();
    this.state = {
      peliculasPopulares: [],
      peliculasMasVistas: [],
      estaCargando: true
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasPopulares: data.results,
        })
      )
      .catch();
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          peliculasMasVistas: data.results,
        })
      )
      .catch();
  }

  render(){
    return (
      <React.Fragment>
          <h1>Wawa Max</h1>
          
          <Buscador/>

          <h3 className="h3">Peliculas populares</h3>
          <section id="pelisPopulares" class="seccionPeliSerie"></section>

          {this.state.peliculasPopulares.length > 0 ? <Container array={this.state.peliculasPopulares} limitePelis = {true} link={"Pop"}/> : <h3>Cargando...</h3>}
          
          <h3>Peliculas más vistas</h3>
          <section id="seriesPopulares" class="seccionPeliSerie"></section>
          {this.state.peliculasMasVistas.length > 0 ? <Container array={this.state.peliculasMasVistas} limitePelis = {true} link={"Top"}/> : <h3>Cargando...</h3>}
      </React.Fragment>
    );
  }
  
  }
  
export default Home;