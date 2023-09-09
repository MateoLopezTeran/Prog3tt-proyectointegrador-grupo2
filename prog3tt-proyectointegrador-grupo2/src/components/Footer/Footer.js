import React from "react";
import LogoSolo from "../../assets/LogoSolo.png"
import logo_tmdb from "../../assets/logo_tmdb.jpg"

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <p className="nuestrosnombres">Freixas, Manoukian y Lopez Teran</p>  
        <p className="nuestrosnombres">2022 Wawa Max corp.</p>
        <img className="logofooter" src={LogoSolo} alt="Logo"/>
        <img className="logotmdb" src={logo_tmdb} alt=""/>
        <p className="nuestrosnombres">¿Necesita ayuda? <a href="mailto:help@wawamax.com">help@wawamax.com</a></p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
