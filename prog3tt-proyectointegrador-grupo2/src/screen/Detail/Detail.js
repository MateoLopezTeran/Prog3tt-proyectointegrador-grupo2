import React, { Component } from "react";
import './Detail.css'

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      pelicula: false,
      favoritos: [],
      textoFavoritos: "Agregar a Favoritos",
    };
  }

  componentDidMount() {
    let favoritosPelis = [];
    let recupeStoragePelis = localStorage.getItem('peliculaFavorita');

    if (recupeStoragePelis !== null) {
      favoritosPelis = JSON.parse(recupeStoragePelis);
      if (favoritosPelis.includes(this.state.id)) {
        this.setState({
     
        });
      }
  }
    

    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`, )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelicula: data,
        }, () => console.log(data))
      ) 
      .catch((err) => console.log(err));
  }
  agregarAfavoritos(){
    let favoritosPelis = [];
    let recupeStoragePelis = localStorage.getItem("peliculaFavorita");

    if (recupeStoragePelis !== null) {
      favoritosPelis = JSON.parse(recupeStoragePelis);

      if (favoritosPelis.includes(this.state.id)) {
        //Si está el id en el array, sacarlo
        favoritosPelis = favoritosPelis.filter(
          (unId) => unId !== this.state.id
        );
        this.setState({
          textoFavoritos: "Agregar a Favoritos"
        });
      } else {
        favoritosPelis.push(this.state.id);
        this.setState({
          textoFavoritos: "Quitar de Favoritos"
          });
      }
    }
    let favoritosPelisAString = JSON.stringify(favoritosPelis);
    localStorage.setItem("peliculaFavorita", favoritosPelisAString);
    console.log(localStorage);
  }

  /* cambiarModo(){
       if() 
  } */

  render(){
    console.log(this.state.id);
    return (
    <React.Fragment>
      {this.state.pelicula ? 
      <main>
        <section>
          <h1 className="titulo">{this.state.pelicula.title}</h1>

          <article className="texto_arriba_foto">
            <p className="descripcion_arriba">{this.state.pelicula.release_date} - ⭐ {this.state.pelicula.vote_average}</p>
          </article>
        </section>
        
        <section className="contenido_principal">
          <article className="imagen_detalle">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="imagenPelicula" />
            <button className="linkafavoritos" onClick={() => this.agregarAfavoritos(this.state.id)}>Agregar a favoritos</button>
          </article>

          <article className="texto_abajo_foto">
            <p className="descripcion_abajo">{this.state.pelicula.runtime} minutos</p>
            <p className="descripcion_abajo">{this.state.pelicula.overview}</p>
              {this.state.pelicula && this.state.pelicula.genres.length > 0 ?
            <p className="descripcion_abajo">{this.state.pelicula.genres.map((generos) => {
              return (
                <p className="link_botones_generos">{generos.name}</p>
              )
            })}</p>
             : <h2>cargando...</h2>}
              
          </article>
        </section>
        
        <p className="descripcion_abajo">

        </p>
      </main>
      : <h2>cargando...</h2>}
      </React.Fragment>
    );
  }
}

export default Detail;
