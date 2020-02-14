import React, { Component } from 'react';


class AddPerson extends Component {

    constructor() {
        super();
        this.input_name_Ref = React.createRef();
        this.state ={
            name:""
        }
    }

    
    handleNameChange(event){
        let newName = event.target.value;
        newName=newName.trim();
        this.setState({
            name:newName
        })

     
    }

    // getName = ()=>{
    //     let inputTag =this.input_name_Ref.current;
    //     let name = inputTag.value;
    //     this.input_name_Ref.current.value="";   
    //     this.input_name_Ref.current.focus();
    //     this.props.AddPerson(name);
    // }


    
    componentDidMount(){
        this.input_name_Ref.current.focus();
        
    }

    render() {
        return (<div className="container text-center">
            <div>
                <h5>Add Person</h5>
                <input type="text"
                    ref={this.input_name_Ref}
                    onChange={this.handleNameChange.bind(this)}
                    value={this.state.name}
                    placeholder="Enter your name" />
                    <button onClick={()=>{
                    this.props.addPerson(this.state.name)
                }}
                    
                
                    className="btn btn-primary"> Add </button>
            </div>

        </div>)
    }

}

export default AddPerson;