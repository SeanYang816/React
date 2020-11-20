import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import One from '../pages/One.js';
import Two from '../pages/Two.js';
const First = () => {

    return (
        <React.Fragment>
            <Router>
                <Link to="/One">One</Link>
                <Link to="/Two">Two</Link>
                {/* One */}
                <Switch>
                    <Route path="/One"><One /></Route>
                {/* Two */}
                    <Route path="/Two"><Two /></Route>
                </Switch>
            </Router>

        </React.Fragment>
    )
}

export default First;
