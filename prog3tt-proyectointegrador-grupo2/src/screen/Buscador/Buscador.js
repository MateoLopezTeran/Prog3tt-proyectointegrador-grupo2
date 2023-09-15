import React, { Component } from "react";
import Container from "../../components/Container/Container";
import './Buscador.css'

class Buscador extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoInput: this.props.match.params.textoInput,
      peliculas: [],
      peliculasFiltradas: [],
      seriesFiltradas: []
    };
    
  }
  
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            peliculasFiltradas: data
          })
        )
        .catch((err) => console.log(err));
    }
  
  render(){
  return (
    <React.Fragment>
  
        <section>
        {this.props.match.params.textoInput}
        <h2>Peliculas parecidas a busqueda</h2>
        {this.state.peliculasFiltradas.length >0 ? <Container info={this.state.textoInput} peliculas={true} peliculasFiltradas={true}/>: ''}
        <h2>Series parecidas a busqueda</h2>
        {this.state.peliculasFiltradas.length >0 ? <Container info={this.state.textoInput} peliculas={true} peliculasFiltradas={true}/>: ''}
        </section>

    </React.Fragment>
  );
  }
}

export default Buscador;
