import { Switch } from "react-router-dom/cjs/react-router-dom.min";

/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);
function Favoritos() {
    <React.Fragment>
        <Navbar/>
        <h1>Home</h1>

        <h3>Peliculas Favoritas</h3>

    </React.Fragment>
}
console.log(favoritosPelis);

