import React, { Component } from "react";
import Container from "../../components/Container/Container";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      busqueda: [],
      valor: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1&include_adult=false`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          busqueda: data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  controlarCambios(controlar) {
    this.setState({ 
      valor:controlar.target.value 
    });
  }

  render() {
    return (
      <main>
        <h1>Resultados: </h1>
        {this.state.busqueda.length > 0 ?  
          <Container
            array={this.state.busqueda}
            limitePelis={true}
          /> : <h3>No se encontraron resultados</h3>
        }
      </main>
    );
  }
}

export default Resultados;