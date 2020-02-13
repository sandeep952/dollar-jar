import React , {Component} from 'react';


class AddPerson extends Component {
    
    constructor(){
        super();
        this.myRef = React.createRef();
    }
    render(){
        return (<div className="container text-center">
        <div>
            <h2>Add Person</h2>
            <input type="text" ref={this.myRef} onChange={this.props.onNameChange} />
            <button onClick={this.props.AddPerson} className="btn btn-primary"> Add </button>    
        </div>

    </div>)
    }
    
}

export default AddPerson;