import React, { Component } from 'react';


class AddPerson extends Component {

    constructor() {
        super();
        this.myRef = React.createRef();
    }
    
    componentDidMount(){
        console.log("addperson mounted")
    }

    render() {
        return (<div className="container text-center">
            <div>
                <h5>Add Person</h5>
                <input type="text"
                    ref={this.myRef}
                    onChange={this.props.onNameChange}
                    placeholder="Enter your name" />
                <button onClick={this.props.AddPerson}
                    className="btn btn-primary"> Add </button>
            </div>

        </div>)
    }

}

export default AddPerson;