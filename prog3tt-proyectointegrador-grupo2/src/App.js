import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screen/Home/Home";
import Detail from "./screen/Detail/Detail";
import Buscador from "./screen/Buscador/Buscador";
import Favoritos from "./screen/Favoritos/Favoritos";
import NoEncontrada from "./screen/NoEcontrada/NoEncontrada";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Detail" component={Detail} />
        <Route path="/Favoritos" exact={true} component={Favoritos} />
        <Route path="/Buscador/:id" component={Buscador} />
        <Route path="" component={NoEncontrada} />
      </Switch>
    </React.Fragment>
  );
}

export default App;