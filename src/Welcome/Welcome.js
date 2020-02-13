import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'
class welcome extends Component {
    state = {
        username: ""
    }
    setName = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <div className="jumbotron welcome text-center ">
            
            <h1>Hey there!!</h1>
            <input type="text"
                    placeholder="Enter your name"
                    onChange={this.setName} />
            
                <Link to={{
                    pathname: "/dollar-jar",
                    username: this.state.username
                }}>
                    <button className="btn btn-primary"> Lets go</button>

                </Link>

            </div>)
    }

}

export default welcome;