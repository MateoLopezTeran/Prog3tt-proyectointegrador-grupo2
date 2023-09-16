import React, { Component } from "react";
import Container from "../../components/Container/Container";
import './Favoritos.css'

class Favoritos extends Component {
  constructor(){
    super();
    this.state = {
      favoritosPelis : []
    }
  }
  
  recuStorage() {
    let recupeStoragePelis = localStorage.getItem('peliculaFavorita');
    let listaRecupe = JSON.parse(recupeStoragePelis)
    if (listaRecupe == null) {
      return []
    } else {
      return listaRecupe
    }
  }

  componentDidMount() { 
    
    let arrayId = this.recuStorage()

    arrayId.map((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let arrayFavoritos = this.state.favoritosPelis
          arrayFavoritos.push(data)
          this.setState({
            favoritosPelis: arrayFavoritos
          });
        })
        .catch(
          (err) => console.log(err)
        );
    });
  }

  render(){
    console.log(this.state);
    return (
      <main>
        {this.state.favoritosPelis.length > 0 ? (
          <Container limitePelis = {false} array = {this.state.favoritosPelis}/>
        ): (
          <h2>No hay favoritos</h2>
        )}
      </main>
    );
  }
}
export default Favoritos;