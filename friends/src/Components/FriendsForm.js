import React, { Component } from 'react';

class FriendsForm extends Component {
    showAlert() {          var newName = prompt("Name");
      var newAge = prompt("Age");
      var newEmail = prompt("Email");
        console.log(newName, newAge, newEmail);
    }
      
    render() {
      return <button onClick={this.showAlert}>Edit</button>;
    }
}

export default FriendsForm;