import React from "react"
import Container from "../../components/Container/Container"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function VerTodas() {
    return (
        <React.Fragment>
            <Navbar/>
        
            <h1>Wawa Max</h1>
        
            <h3 className="h3">Peliculas populares</h3>
            <section id="pelisPopulares" class="seccionPeliSerie"></section>
            <Container url = 'https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>

            <h3>Peliculas más vistas</h3>
            <section id="seriesPopulares" class="seccionPeliSerie"></section>
            <Container url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>

            <Footer/>
        </React.Fragment>
    )
}

export default VerTodas;