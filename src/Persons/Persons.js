import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class Persons extends Component {


    state = {
        personsCount: 3,
        newPerson: null,
        total: 0,
        persons: [
            {
                name: "Sandeep",
                amount: 10,
                id: "1"

            },
            {
                name: "Neel",
                amount: 20,
                id: "2"
            },
            {
                name: "Meet",
                amount: 30,
                id: "3"
            },


        ]
    }


    addPersonHandler = () => {
        if (this.state.newPerson) {

            let newPersons = this.state.persons;
            newPersons.push(this.state.newPerson)
            this.setState({
                Persons: newPersons,
                newPerson: null
            })

        }
    }

    calculateTotal = () => {
        let total = 0;
        this.state.persons.forEach((person) => {
            total += person.amount;
        })
        this.setState({
            total: total
        })
    }

    incrementAmountHandler = (personId) => {
        let updatedPersons = this.state.persons;
        let i = 0;
        for (i = 0; i < updatedPersons.length; i++) {
            if (updatedPersons[i].id === personId) {
                break;
            }
        }
        updatedPersons[i].amount += 10;
        this.setState({
            persons: updatedPersons
        })
    }



    decrementAmountHandler = (personId) => {
        let updatedPersons = this.state.persons;
        let i = 0;
        for (i = 0; i < updatedPersons.length; i++) {
            if (updatedPersons[i].id === personId) {
                break;
            }
        }
        updatedPersons[i].amount -= 10;
        this.setState({
            persons: updatedPersons
        })
    }
    nameChangeHandler = (event) => {
        let newName = event.target.value;
        let count = this.state.personsCount + 1;
        let newPerson = {
            name: newName,
            amount: 0,
            id: count
        }

        this.setState({
            newPerson: newPerson,
            personsCount: this.state.personsCount + 1
        })

    }


    render() {
        let username = this.props.location.username
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Hello {username}</h1>
                    <hr/>
                </div>

                <AddPerson
                    AddPerson={this.addPersonHandler}
                    onNameChange={this.nameChangeHandler} />

                
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                </div>

                {this.state.persons.map((person) => {
                    return (<Person name={person.name}
                        amount={person.amount}
                        key={person.id}
                        incrementAmount={() => {
                            this.incrementAmountHandler(person.id);
                        }}
                        decrementAmount={() => {
                            this.decrementAmountHandler(person.id);
                        }}
                    />
                    )
                })}
            </div>);
    }

}
export default Persons;