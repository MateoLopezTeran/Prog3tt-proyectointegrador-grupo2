import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";

function Home() {
  return (
    <React.Fragment>
        <Navbar/>
        <h1>Home</h1>

        <h3>Peliculas populares</h3>
        <section id="pelisPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <h3>Series populares</h3>
        <section id="seriesPopulares" class="seccionPeliSerie"></section>
        <Container/>

        <Footer/>
    </React.Fragment>
  );
}

export default Home;