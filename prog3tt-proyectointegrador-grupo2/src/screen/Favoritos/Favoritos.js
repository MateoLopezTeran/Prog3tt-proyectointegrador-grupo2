import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoritosPelis : []
        }
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
    
            <h1>Favoritos</h1>
            <section id="favoritosPelis" class="seccionPeliSerie"></section>
             {this.state.peliculas.map((unaPelicula, idx) => {
            if (idx === favoritosPelis.length) {
              return (<Card
              datosPelicula={unaPelicula}
            />)
            } else {return (null)}
          })} 
            
            {this.state.favoritosPelis.length > 0 ? <Container array={this.state.favoritosPelis}/> : <h3>Cargando...</h3>}

            </React.Fragment>
        );    
    }
    }

export default Favoritos;