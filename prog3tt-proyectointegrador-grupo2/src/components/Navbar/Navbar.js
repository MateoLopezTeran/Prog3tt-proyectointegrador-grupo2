import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LogoSolo from "../../assets/LogoSolo.png"

function Navbar() {
  return (
    <header>
      <section className = "headerIzquierda">
        <img className="logoheader" src={LogoSolo} alt="Logo Empresa"/>
        <a href="/" className="nombrepagina">
          <h2 className="nombrepagina">Wawa Max</h2>
        </a>
      </section>

      <nav className="headerDerecha">
        <article className="linksHeader">
            <a className="linkADetalle" href="/Favoritos">Favoritos</a>
            <a className="linkADetalle" href="/VerTodas">Ver todas las peliculas populares</a>
            <a className="linkADetalle" href="/VerTodas">Ver todas las peliculas más vistas</a>
        </article>
        <form className="formbusqueda" action="" method="get">
            <input className="inputbusqueda" type="text" name="buscar" id="" placeholder="Película o Serie"/>
            <button className="submitbtn" type="submit">Buscar</button>
        </form>
      </nav>
    </header>
    /* No esta terminado. Le falta los links */
  );
}

<Link className="botonesHeader" to="/">Home</Link>

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