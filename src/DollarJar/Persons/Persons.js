import React from 'react';
import Person from '../Person/Person'

let Persons = (props) => {
    return (<div>
        {props.persons.map((person) => {
            return (<Person name={person.name}
                amount={person.amount}
                key={person.id}
                incrementAmount={() => {
                    props.incrementAmountHandler(person.id);
                }}
                decrementAmount={() => {
                    props.decrementAmountHandler(person.id);
                }}
            />
            )
        })}
    </div>);
}
export default Persons;