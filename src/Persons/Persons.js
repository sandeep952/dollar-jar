import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class Persons extends Component {
    state = {
        newPerson:"",
        persons: [
            {
                name: "Sandeep",
                amount: 10,
            },
            {
                name: "Neel",
                amount: 20,
            },
            {
                name: "Meet",
                amount: 30
            },
            {
                name: "Surbhi",
                amount: 30
            }

        ]
    }


    addPersonHandler(newPerson) {
        let newPersons = this.state.persons;
        newPersons.push(newPerson)

        this.setState({
            Persons: newPersons
        })
    }

    render() {
        return (<div className="container">

            <AddPerson AddPerson={this.addPersonHandler}/>

            {this.state.persons.map((person) => {
                return (<div>
                    <Person name={person.name} amount={person.amount} />
                </div>)
            })}
        </div>);
    }

}
export default Persons;