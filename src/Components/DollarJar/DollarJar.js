import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'

class DollarJar extends Component {

    constructor(props) {
        super(props)
        // if(performance.navigation.type===1){
        //     this.props.history.push('/');   
        // }

        this.state = {
            personsCount: 1,
            charge: 10,
            total: 0,
            persons: [
                {
                    name: "Sandeep",
                    amount: 10,
                    id: 1

                },

            ]
        }

    }

    componentDidMount = () => {
        this.calculateTotal();
    }


    addPerson = (name) => {

        if (name) {
            let newPersons = [...this.state.persons];
            let newCount = this.state.personsCount + 1;
            let newPerson = {
                name: name,
                amount: 0,
                id: newCount
            }

            newPersons.push(newPerson)
            this.setState({
                persons: newPersons,
                personsCount: newCount,

            })

        }
        this.calculateTotal();
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

    handleIncrementAmount = (personId) => {
        let updatedPersons = [...this.state.persons];
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

        this.calculateTotal();
    }



    handleDecrementAmount = (personId) => {
        let updatedPersons = [...this.state.persons];
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
        this.calculateTotal();
    }

    configureAmount = (event) => {
        let newCharge = event.target.value.trim()
        if (newCharge === "") {
            this.setState({
                charge: 0
            })
        }
        else {
            newCharge = parseInt(event.target.value)
            if (!isNaN(newCharge)) {
                this.setState({
                    charge: newCharge
                })
            }

        }
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
                            <h5>Configure amount :<strong> {this.state.charge} </strong></h5>
                            <input type="text"
                                placeholder="Enter amount"
                                onChange={this.configureAmount} value={this.state.charge} />

                        </div>

                    </div>
                    <div className="col-md-6">
                        <AddPerson
                            addPerson={this.addPerson} />


                    </div>
                </div>
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                    <hr />
                </div>
                <Persons
                    persons={this.state.persons}
                    handleIncrementAmount={this.handleIncrementAmount.bind(this)}
                    handleDecrementAmount={this.handleDecrementAmount.bind(this)}
                />

            </div>);
    }

}
export default DollarJar;