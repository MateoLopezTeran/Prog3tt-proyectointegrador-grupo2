import React, { Component } from "react";
import Container from "../../components/Container/Container";
import './VerTodas.css'
import Filtro from "../../components/Filtro/Filtro";

class VerTodasPop extends Component{
  constructor(props){
    super(props);
    this.state = {
      pelicula: [],
      filtro: false,
      proximaPag: 1,

    }
  }

  traerMas() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=${this.state.proximaPag}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelicula: this.state.pelicula.concat(data.results),
          proximaPag: data.page + 1
        }, () => console.log(data.page + 1))
      ) 
      .catch((err) => console.log(err));
  }

  filtroPelis = (textoInput) => {
    let filtroPeliculas = this.state.pelicula.filter((popular) => {
      return popular.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      pelicula: filtroPeliculas,
      filtro: true,
    });
  };

  /* filtroPelis(textoInput) {
    let peliFiltradas = this.state.pelicula.filter((popular) => {
      return popular.title.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      pelicula: peliFiltradas,
    });
  } */

  componentDidMount() {
    this.traerMas();
  }
  render(){
    console.log(this.state.proximaPag);
    return (
        <React.Fragment>
          <main>
            <h1 className="h1">Peliculas Populares</h1>
            <section id="pelisPopulares" class="seccionPeliSerie"></section>
            <Filtro handle = {this.filtroPelis}></Filtro>
            {this.state.pelicula.length > 0 ? <Container array={this.state.pelicula}/> : <h3>Cargando...</h3>}
            {this.state.filtro ? (
              <h2>Error de carga</h2>
            ): (
              <button className="linkadetalle" onClick={() => this.traerMas()}>Mostrar más</button>
            )}  
          </main>
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