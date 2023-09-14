import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LogoSolo from "../../assets/LogoSolo.png"
import Buscador from "../Buscador/Buscador";
import Formulario from "../Formulario/Formulario";

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
            <a className="linkFavoritos" href="/Favoritos">Favoritos</a>
            <a className="linkADetalle" href="/VerTodasPop">Ver todas las peliculas populares</a>
            <a className="linkADetalle" href="/VerTodasTop">Ver todas las peliculas más vistas</a>
          </article>
          <Buscador/>
        </nav>
      </header>
  );
}

<Link className="botonesHeader" to="/">Home</Link>

export default Navbar;