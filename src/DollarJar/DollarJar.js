import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class DollarJar extends Component {
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            personsCount: 3,
            newPerson: null,
            charge: 10,
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
    
    }

    componentDidMount(){
        this.myRef.current.focus();
    }
    

    addPersonHandler = () => {
        if (this.state.newPerson) {
            let inputTag= this.myRef.current;
            let newPersons = this.state.persons;
            newPersons.push(this.state.newPerson)
            this.setState({
                Persons: newPersons,
                newPerson: null
            })
            inputTag.value="";
            inputTag.focus();
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
        updatedPersons[i].amount += parseInt(this.state.charge);
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
        updatedPersons[i].amount -= parseInt(this.state.charge);
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

    configureAmount = (event) => {
        let newState = { ...this.state }
        newState.charge = event.target.value;
        this.setState({
            ...newState
        })
    }


    render() {
        let username = this.props.location.username
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Hello {username}</h1>
                    <hr />
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <div className="configure-amount">
                            <h5>Configure amount</h5>
                            <input type="text"
                                placeholder="Enter amount"
                                onChange={this.configureAmount} />

                        </div>


                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <h5>Add Person</h5>
                            <input type="text"
                                ref={this.myRef}
                                onChange={this.nameChangeHandler}
                                placeholder="Enter your name" />
                            <button onClick={this.addPersonHandler} className="btn btn-primary"> Add </button>
                        </div>


                    </div>
                </div>
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                    <hr />
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
export default DollarJar;