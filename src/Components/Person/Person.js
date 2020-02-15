import React from 'react';
import './Person.css'

let Person = (props) => {
    return (<div className="Person text-center">
        <div>
            <h2>Name : {props.name}</h2>
            <p>Amount : {props.amount}</p>
        </div>

        <button className="btn btn-primary" onClick={props.incrementAmount}> Add</button>
        <button className="btn btn-danger" onClick={props.decrementAmount}> Subtract</button>

    </div>);
}
export default Person;