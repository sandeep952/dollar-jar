import React, { Component } from 'react';


class AddPerson extends Component {

    constructor() {
        super();
        this.input_name_Ref = React.createRef();
    }

    getName = ()=>{
        let inputTag =this.input_name_Ref.current;
        let name = inputTag.value;
        this.input_name_Ref.current.value="";   
        this.input_name_Ref.current.focus();
        return name;
    }


    
    componentDidMount(){
        this.input_name_Ref.current.focus();
        
    }

    render() {
        return (<div className="container text-center">
            <div>
                <h5>Add Person</h5>
                <input type="text"
                    ref={this.input_name_Ref}
                    onChange={this.props.onNameChange}
                    placeholder="Enter your name" />
                <button onClick={()=>{
                    let name = this.getName();
                    this.props.AddPerson(name);
                }}
                    className="btn btn-primary"> Add </button>
            </div>

        </div>)
    }

}

export default AddPerson;