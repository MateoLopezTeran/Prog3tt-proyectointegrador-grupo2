import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav>
      <ul className="headerDerecha">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Favoritos">Favorites</Link>
        </li>
        <li>
          <Link to="/Detail">Detail</Link>
        </li>
        <li>
          <Link to="/Buscador/:id">Buscador</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

/* 
<section class = "headerIzquierda">
        <img class="logoheader" src="./img/LogoSolo.png" alt="Logo Empresa">
        <a href="./home.html" class="nombrepagina"><h2 class="nombrepagina">Wawa Max</h2></a>
    </section>

    <nav class="headerDerecha">
        <article class="linksHeader">
            <a class="linkfavoritos" href="./favoritos.html">Favoritos</a>
            <a class="linkgeneros" href="./generos.html">Géneros</a>
        </article>
        <form class="formbusqueda" action="./searchresults.html" method="get">
            <input class="inputbusqueda" type="text" name="buscar" id="" placeholder="Película o Serie">
            <button class="submitbtn" type="submit">Buscar</button>
        </form>
    </nav>

 */