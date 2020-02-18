import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import DollarJar from './Components/DollarJar/DollarJar';
class App extends Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }

        // this.changeUsername.bind(this)

    }

    changeUsername = (newName) => {

        this.setState({
            username: newName
        })
    }

    // <Route exact path="/" component={() => 
    //     (<Welcome username={this.state.username} changeUsername={this.changeUsername}/>)} />

    render() {

        return (

            <div className="container" >
                <Router>
                
                    <Route exact path="/">
                        <Welcome username={this.state.username} changeUsername={this.changeUsername} />
                    </Route>

                    <Route exact path="/dollar-jar" component={() =>
                        (<DollarJar username={this.state.username} />)} />

                </Router>

            </div>
        );
    }

}

export default App;