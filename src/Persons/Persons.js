import React, { Component } from 'react';
import Person from './Person/Person'
import AddPerson from '../AddPerson/AddPerson';


class Persons extends Component {
    state = {
        newPerson: null,
        total: 0,
        persons: [
            {
                name: "Sandeep",
                amount: 10,
                id:"1a"
                
            },
            {
                name: "Neel",
                amount: 20,
                id:"2a"
            },
            {
                name: "Meet",
                amount: 30,
                id:"3a"
            },


        ]
    }


    addPersonHandler = () => {
        if(this.state.newPerson){

            let newPersons = this.state.persons;
            newPersons.push(this.state.newPerson)
            this.setState({
                Persons: newPersons,
                newPerson:null
            })
            
        }
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
        let newPerson= {
            name: newName,
            amount: 0,
            id:newName.substr(1,3)+Math.random()
        }

        this.setState({
        newPerson: newPerson   
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
            return (<Person name={person.name}
                amount={person.amount}
                key={person.id}
             />
            )
        })}
    </div>);
}

}
export default Persons;