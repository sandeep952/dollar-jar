import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class welcome extends Component{
    state={
        username:""
    }
    setName = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return (<div className="container text-center">
        <input type="text" 
        placeholder="Enter your name"
        onChange={this.setName} />
        
        <Link to={{
            pathname: "/dollar-jar",
            username:this.state.username 
        }}>
            <button > Lets go</button>

        </Link>

    </div>)    
    }
    
}

export default welcome;