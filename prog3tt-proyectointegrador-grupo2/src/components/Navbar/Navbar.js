import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Formulario from "../Formulario/Formulario";

function Navbar() {
  return (
    <nav>
      <article className="headerIzquierda">
        <section>
          <Link className="botonesHeader" to="/">Home</Link>
        </section>
        <section>
          <Link className="botonesHeader" to="/Favoritos">Favoritos</Link>
        </section>
        <Formulario/>
        <section>
        
        </section>
        {/* <section>
          <Link className="botonesHeader" to="/Detail">Detalle</Link>
        </section> */}
        {/* <section>
          <Link className="botonesHeader" to="/Buscador/:id">Buscador</Link>
        </section> */}
      </article>
    </nav>
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