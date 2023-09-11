import React from "react";
import Container from "../../components/Container/Container";

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);
function Favoritos() {
    return (
        <React.Fragment>

        <h1>Favoritos</h1>
        <section id="favoritosPelis" class="seccionPeliSerie"></section>
        <Container/>
        </React.Fragment>
    );
    
}
console.log(favoritosPelis);

export default Favoritos;