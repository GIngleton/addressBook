import React, { Component } from 'react';

class Person extends React.Component {
  render() {
    return (
      <li>
        <p>
          {this.props.person.firstName} <br />
          {this.props.person.lastName} <br />
          {this.props.person.phone}
        </p>
      </li>
    )
  }
}

export default Person;
