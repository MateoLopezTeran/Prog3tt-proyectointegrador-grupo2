import React, {Component} from "react";

class Card extends Component {
    constructor(){
        super();
    this.state = {
        pelicula: {}
    };
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1')
        .then((res) => res.json())
        .then((data) =>
        this.setState({
          peliculas: data.results,
        }))
        .catch()
    }
    

    render() {
        return <article>
            
        </article>;
    }
}



export default Card;