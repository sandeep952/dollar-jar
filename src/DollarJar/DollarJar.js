import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class DollarJar extends Component {


    state = {
        personsCount: 3,
        newPerson: null,
        charge:10,
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

    componentDidMount = ()=>{
        this.calculateTotal();
    }


    addPersonHandler = (name) => {
      
        if (name) {

            let newPersons = [...this.state.persons];
            let newCount = this.state.personsCount + 1;
            let newPerson = {
                name:name,
                amount:0,
                id:newCount
            }

            newPersons.push(newPerson)
            this.setState({
                persons: newPersons,
                personsCount:newCount
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

    incrementAmountHandler = (personId) => {
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



    decrementAmountHandler = (personId) => {
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

    configureAmount = (event)=>{
        let newState = {...this.state}
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
                            <h5>Configure amount :<strong> {this.state.charge} </strong></h5>
                            <input type="number" 
                            placeholder="Enter amount"
                            onChange={this.configureAmount} value={this.state.charge} />
                         
                            </div>


                    </div>
                    <div className="col-md-6">
                        <AddPerson
                            AddPerson={this.addPersonHandler} />


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