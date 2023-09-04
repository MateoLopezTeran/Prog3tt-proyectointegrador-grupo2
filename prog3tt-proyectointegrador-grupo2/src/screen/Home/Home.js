import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
        <Navbar/>
        <h1>Home</h1>

        <h3>Peliculas populares</h3>
        <section id="pelisPopulares" class="seccionPeliSerie"></section>
        <Conteiner/>

        <h3>Series populares</h3>
        <section id="seriesPopulares" class="seccionPeliSerie"></section>
        <Conteiner/>

        <Footer/>
    </React.Fragment>
  );
}

export default Home;
