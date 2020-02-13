import React from 'react';

let AddPerson = (props) => {



    return (<div className="container text-center">
        <div>
            <h2>Add Person</h2>
            <input type="text" onChange={props.onNameChange}/>
            <button onClick={props.AddPerson} className="btn btn-primary"> Add </button>    
        </div>

    </div>)
}

export default AddPerson;