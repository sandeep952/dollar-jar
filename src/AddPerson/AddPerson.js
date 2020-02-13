import React from 'react';

let AddPerson = (props) => {
    return (<div className="container text-center">
        <div>
            <h1>Add Person</h1>
            <input type="text"/>
            <button onClick={props.addPerson}> Add </button>
        </div>

    </div>)
}

export default AddPerson;