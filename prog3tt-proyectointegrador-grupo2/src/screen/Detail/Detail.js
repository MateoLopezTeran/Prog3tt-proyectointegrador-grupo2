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
        <h2>{this.state.pelicula.title}</h2>
        {/* <h2>{this.state.pelicula}</h2> */}
        {this.state.pelicula ?
        <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="imagenPelicula" />
        : <h2>cargando...</h2>}
    </React.Fragment>
  );
}}
  

export default Detail;