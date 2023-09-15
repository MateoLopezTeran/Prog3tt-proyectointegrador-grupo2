import React, { Component } from "react";
import Container from "../../components/Container/ContainerTodas";
import './VerTodas.css'

class VerTodasPop extends Component{
  constructor(props){
    super(props);
    this.state = {
      pelicula: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.categoria);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
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
            <h3 className="h3">Peliculas Populares</h3>
          <section id="pelisPopulares" class="seccionPeliSerie"></section>
          {this.state.pelicula.length > 0 ? <Container array={this.state.pelicula} arrayPelis={this.state.pelicula}/> : <h3>Cargando...</h3>}
          </React.Fragment>
    )
}
}

export default VerTodasPop;



// LEE --> trate de traer un id en el link para saber si era populares o "mas vistas" pero no puedo traer ni las populares solas

// Lo que estaba quedó aca abajo 



/* import React, {Component} from "react";
import Container from "../../components/Container/Container"

class VerTodas extends Component {
    constructor(props){
      super(props);
      this.state = {
        pelicula: false
      } 
    }

    componentDidMount() {
        fetch()
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
                <h1>Wawa Max</h1>
            
                <h3 className="h3">Peliculas populares</h3>
                <section id="pelisPopulares" class="seccionPeliSerie"></section>
                <Container url = 'https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
            </React.Fragment>
        )
    }
}

export default VerTodas;

 */