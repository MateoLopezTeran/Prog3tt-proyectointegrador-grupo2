import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screen/Home/Home";
import Detail from "./screen/Detail/Detail";
import Favoritos from "./screen/Favoritos/Favoritos";
import NoEncontrada from "./screen/NoEncontrada/NoEncontrada";
import VerTodasPop from "./screen/VerTodas/VerTodasPop";
import VerTodasTop from "./screen/VerTodas/VerTodasTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Resultados from "./screen/Resultados/Resultados";

function App() {
  return (
    <React.Fragment>
      holaaaaa
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Detail/:id" component={Detail} />
        <Route path="/favoritos" exact={true} component={Favoritos} />
        <Route path="/VerTodasPop" exact={true} component={VerTodasPop} />
        <Route path="/VerTodasTop" exact={true} component={VerTodasTop} />
        <Route path="/Resultados/:query" component={Resultados}/>
        <Route path="" component={NoEncontrada} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;