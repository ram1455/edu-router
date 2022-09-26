import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const Servis = ()=>{
    let match = useRouteMatch();
    return(
        <div className="main">
        <h1>Service</h1>
            <ol>
                <li>4</li>
                <li>tiga</li>
                <li><Link to={`${match.url}/kasar`}>kasar</Link></li>
                <li>satu</li>
            </ol>
            <hr/>
            <Switch>
                <Route path="/service/kasar">
                    askdad 
                </Route>
            </Switch>
        </div>
    )
}

export default Servis;