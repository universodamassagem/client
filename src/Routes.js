import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Estetica from "./pages/Estetica";
import Massagem from "./pages/Massagem";
import Massagistas from "./pages/Massagistas";
import Sobre from "./pages/Sobre";
import Perfil from "./pages/Perfil";

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/Contato" exact component={ Contato } />
                <Route path="/Estetica" exact component={ Estetica } />
                <Route path="/Massagem" exact component={ Massagem } />
                <Route path="/Massagistas" exact component={ Massagistas } />
                <Route path="/Sobre" exact component={ Sobre } />
                <Route path="/Perfil" exact component={ Perfil } />
            </Switch>
        </BrowserRouter>
    );
}