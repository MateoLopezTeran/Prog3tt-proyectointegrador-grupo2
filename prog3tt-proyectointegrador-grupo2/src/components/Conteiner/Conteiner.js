import React, { Component } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./characters.css";

class Conteiner extends Component {
    constructor() {
      super();
      this.state = {
        peliculas: [], //aparecer personajes
        nextUrl: "",
        peliculasFavoritas: [],
      };
    }

    componentDidMount() {
        //BUscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              peliculas: data.results,
              nextUrl: data.info.next,
            })
          )
          .catch();
    }
}