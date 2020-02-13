import React from 'react';
import './Person.css'

let Person = (props) => {
    return (<div className="Person text-center">
        <div>
        <p>Name : {props.name}</p>    
        <p>Amount : {props.amount}</p>
        </div>

        <input type="text"/> 
        <button className="btn btn-primary"> Add</button>
        <button className="btn btn-danger"> Subtract</button>
        
    </div>);
}
export default Person;