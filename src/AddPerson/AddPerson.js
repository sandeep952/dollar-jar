import React, { Component } from 'react';


class AddPerson extends Component {

    constructor() {
        super();
        this.input_name_Ref = React.createRef();
        this.state = {
            name: ""
        }
    }


    handleNameChange(event) {
        let newName = event.target.value;
        newName = newName.trim();
        this.setState({
            name: newName
        })


    }

    componentDidMount() {
        this.input_name_Ref.current.focus();

    }

    handleAddButtonClick() {
        this.props.addPerson(this.state.name)
        
        this.setState({
            name: ""
        })

    }

    render() {
        return (<div className="container text-center">
            <div>
                <h5>Add Person</h5>
                <form>

                    <input type="text"
                        ref={this.input_name_Ref}
                        onChange={this.handleNameChange.bind(this)}
                        value={this.state.name}
                        placeholder="Enter your name" />
                    <button type="submit" onClick={(event) => {
                        event.preventDefault();
                        this.handleAddButtonClick();
                    
                    }}

                        className="btn btn-primary"> Add </button>
                </form>

            </div>

        </div>)
    }

}

export default AddPerson;