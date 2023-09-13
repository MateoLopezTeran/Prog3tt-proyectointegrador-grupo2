import React, { Component } from "react";

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      pelicula: []
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
    console.log(this.state.pelicula);
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
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="imagenPelicula" />
          </article>

          <article className="texto_abajo_foto">
            
            <p className="descripcion_abajo">{this.state.pelicula.runtime} minutos</p>
            <p className="descripcion_abajo">{this.state.pelicula.overview}</p>
              {this.state.pelicula && this.state.pelicula.length > 0 ?
            <p className="descripcion_abajo">{this.state.pelicula.genres.map((generos, i) => {
              return (
                generos = generos.name
              )
            })}</p>
             : <h2>cargando...</h2>}
              
          </article>
        </section>
        
        <p className="descripcion_abajo">
          <a href="/favoritos" class="link_favoritos" id="botonFavoritosPelis">Agregar a favoritos</a>
        </p>
      </main>
    </React.Fragment>
  );
}}
  

export default Detail;