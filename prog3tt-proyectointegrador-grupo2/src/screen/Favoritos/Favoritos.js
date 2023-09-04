import React from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar"

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);
function Favoritos() {
    <React.Fragment>
        <Navbar/>
        <h1>Favoritos</h1>
        <Container/>
    </React.Fragment>
}
console.log(favoritosPelis);

