import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import HomeHi from "./components/Home/HomeHi"
import Report from "./components/Report/Report"

function App() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/report' exact component={Report} />
                <Route path='/hi' exact component={HomeHi} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
