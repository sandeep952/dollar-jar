import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'
class welcome extends Component {
    constructor(){
        super();
        this.nameRef=React.createRef();
    }

    state = {
        username: ""
    }
    setName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    componentDidMount = ()=>{
        this.nameRef.current.focus();
    }

    render() {
        return (
            <div className="jumbotron welcome text-center ">
            
            <h1>Hey there!!</h1>
            <input type="text"
                    placeholder="Enter your name"
                    onChange={this.setName}
                    ref={this.nameRef} />
            
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