import React, { Component } from "react";

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      pelicula: false
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`, )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          pelicula: data,
        }, () => console.log(data))
      )
      .catch((err) => console.log(err));
  }

  render(){
    console.log(this.props);
    return (
    <React.Fragment>
      <main className="detalle">
        <section className="titulo_texto">
          <h1 className="titulo">{this.state.pelicula.title}</h1>

          <article className="texto_arriba_foto">
            <p className="descripcion_arriba">{this.state.pelicula.release_date} - ⭐ {this.state.pelicula.vote_average}</p>
          </article>
        </section>
        
        <section className="contenido_principal">
          <article className="imagen_detalle">
            {this.state.pelicula ?
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="imagenPelicula" />
            : <h2>cargando...</h2>}
          </article>

          <article className="texto_abajo_foto">
            
            <p className="descripcion_abajo">{this.state.pelicula.runtime} minutos</p>
            <p className="descripcion_abajo">{this.state.pelicula.overview}</p>
            {<p className="descripcion_abajo">Generos: {this.state.pelicula.genres.map((genres, i) => {
              return (
                genres.name
              )
          })}</p>}
          </article>
        </section>
        
        <p className="descripcion_abajo">
          <a href="/Favoritos" class="link_favoritos" id="botonFavoritosPelis">Agregar a favoritos</a>
        </p>
      </main>
    </React.Fragment>
  );
}}
  

export default Detail;