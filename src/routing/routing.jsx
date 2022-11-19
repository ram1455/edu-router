import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Foam from "../formValidation/Form";
import Portindex from "../portofolioReact/portindex";
import Home from "./komponen/home/home";
import Nav from "./navigation/navigation";


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/portindex">
                        <Portindex/>
                    </Route>
                    <Route path="/form">
                        <Foam/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routing;