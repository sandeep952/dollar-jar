import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class Persons extends Component {
    state = {
        newPerson: {},
        total: 0,
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


        ]
    }


    addPersonHandler = () => {
        let newPersons = this.state.persons;
        newPersons.push(this.state.newPerson)

        this.setState({
            Persons: newPersons
        })
    }

    calculateTotal = () => {
        let total = 0;
        this.state.persons.forEach((person) => {
            total += person.amount;
        })
        return total;
    }

    nameChangeHandler = (event) => {
        let newName = event.target.value;
        this.setState({
            newPerson: {
                name: newName,
                amount: 0
            }
        })
    }

    render() {
        return (<div className="container">
            <AddPerson
                AddPerson={this.addPersonHandler}
                onNameChange={this.nameChangeHandler} />

            <div className="total">
                <h2> Total : {this.calculateTotal()} </h2>
            </div>
            
            {this.state.persons.map((person) => {
                return (<div>
                    <Person name={person.name}
                        amount={person.amount}
                        key={person.name.substr(0, 3) + Math.random() * 100} />
                </div>)
            })}
        </div>);
    }

}
export default Persons;