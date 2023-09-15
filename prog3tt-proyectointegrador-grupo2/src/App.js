import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screen/Home/Home";
import Detail from "./screen/Detail/Detail";
import Buscador from "./screen/Buscador/Buscador";
import Favoritos from "./screen/Favoritos/Favoritos";
import NoEncontrada from "./screen/NoEncontrada/NoEncontrada";
import VerTodasPop from "./screen/VerTodas/VerTodasPop";
import VerTodasTop from "./screen/VerTodas/VerTodasTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Detail/:id" component={Detail} />
        <Route path="/favoritos" exact={true} component={Favoritos} />
        <Route path="/Buscador" component={Buscador} />
        <Route path="/VerTodasPop" exact={true} component={VerTodasPop} />
        <Route path="/VerTodasTop" exact={true} component={VerTodasTop} />
        <Route path="" component={NoEncontrada} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;