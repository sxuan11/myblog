import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseLayout from './layout/index'

function BasicExample() {
    return (
        <Router>
                
                <Route path="/home" component={BaseLayout} />
                <Route path="/" to='/home' />
        </Router>
)
}

export default BasicExample;