import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

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

        {

          this.state.pelicula ?


        <img className="poster" src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt="imagenPelicula" />
        : <h2>cargando...</h2>
        
        
        }
    </React.Fragment>
  );
}}
  

export default Detail;