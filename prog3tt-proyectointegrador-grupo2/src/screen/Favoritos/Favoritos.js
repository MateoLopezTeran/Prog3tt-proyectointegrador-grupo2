import React, { Component } from "react";
import Container from "../../components/Container/Container";

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);

class Favoritos extends Component() {
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
              pelicula: data,
            }, () => console.log(data))
          )
          .catch((err) => console.log(err));
      }

    render(){
        return (
            <React.Fragment>
    
            <h1>Favoritos</h1>
            <section id="favoritosPelis" class="seccionPeliSerie"></section>
            <Container/>
            </React.Fragment>
        );
        
    }
    }
    
console.log(favoritosPelis);

export default Favoritos;