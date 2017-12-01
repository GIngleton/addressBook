import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleList from './peopleList.js';
import Person from './person.js';
import AddPerson from './addPerson.js';
import DeletePerson from './deletePerson.js';




let people = [
  {firstName: "John", lastName: "Doe", age: 50, phone: "333 4567111"},
  {firstName: "Alice", lastName: "Smith", age: 22, phone: "333 45667933"},
  {firstName: "Mark", lastName: "Joseph", age: 45, phone: "333 33446776"},
  {firstName: "Marion", lastName: "Justin", age: 45, phone: "333 4343433345"}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: people
    }
  }

  addPerson(person) {
    let people = this.state.people;

    people.push(person);

    this.setState({
      people: people
    })
  }

  deletePerson(e){
    let people = this.state.people;
    this.setState({
      people: this.state.people.filter( (person)=> person !== e)
    })
  }

  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <PeopleList people={this.state.people} />
        <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
      </div>
    )
  }
}
export default App;



// React.render(<App people={people} />, document.getElementById('app'));
