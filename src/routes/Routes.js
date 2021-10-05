import React, { Component } from "react";
import { Switch} from "react-router";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Route from "./route"

const Routes = () => {
    return(
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/login" exact component={Login}/>
        <Route isPrivate path="/dashboard" exact component={Dashboard}/>
    </Switch>
    )
}

export default Routes 