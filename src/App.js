import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DollarJar from './Components/DollarJar/DollarJar';


class App extends Component {


    render() {
        return (

            <div className="container" >
                <Router>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/dollar-jar"
                        component={DollarJar} />
                </Router>

            </div>
        );
    }

}

export default App;