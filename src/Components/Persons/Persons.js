import React from 'react';
import Person from '../Person/Person'

let Persons = (props) => {
    return (<div>
        {props.persons.map((person) => (<Person name={person.name}
                amount={person.amount}
                key={person.id}
                incrementAmount={props.handleIncrementAmount.bind(this,person.id)}
                decrementAmount={props.handleDecrementAmount.bind(this,person.id)}
            />
            )
        )}
    </div>);
}
export default Persons;