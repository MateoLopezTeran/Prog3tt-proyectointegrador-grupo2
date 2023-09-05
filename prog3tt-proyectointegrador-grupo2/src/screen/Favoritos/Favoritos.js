import React from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);
function Favoritos() {
    return (
        <React.Fragment>
        <Navbar/>

        <h1>Favoritos</h1>
        <section id="favoritosPelis" class="seccionPeliSerie"></section>
        <Container/>
        <Footer/>
        </React.Fragment>
    );
    
}
console.log(favoritosPelis);

export default Favoritos;