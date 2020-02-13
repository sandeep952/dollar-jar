import React from 'react';

let AddPerson = (props) => {



    return (<div className="container text-center">
        <div>
            <h1>Add Person</h1>
            <input type="text" onChange={props.onNameChange}/>
            <button onClick={props.AddPerson} className="btn btn-primary"> Add </button>    
        </div>

    </div>)
}

export default AddPerson;