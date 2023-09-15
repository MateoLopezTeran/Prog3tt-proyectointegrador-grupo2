import React, { Component } from "react";
import Container from "../../components/Container/ContainerTodas";
import './VerTodas.css'

class VerTodasTop extends Component{
  constructor(props){
    super(props);
    this.state = {
      pelicula: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.categoria);
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelicula: data.results,
        }, () => console.log(data))
      ) 
      .catch((err) => console.log(err));
  }

  render(){
    return (
        <React.Fragment>
            <h3 className="h3">Peliculas Mas Vistas</h3>
          <section id="seriesPopulares" class="seccionPeliSerie"></section>
          {this.state.pelicula.length > 0 ? <Container array={this.state.pelicula} arrayPelis={this.state.pelicula}/> : <h3>Cargando...</h3>}
          </React.Fragment>
    )
}
}

export default VerTodasTop;