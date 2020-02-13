import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Persons from './Persons/Persons';


class App extends Component {


    render() {
        return (

            <div className="container" >
                <Router>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/dollar-jar"
                        component={Persons} />
                </Router>

            </div>
        );
    }

}

export default App;