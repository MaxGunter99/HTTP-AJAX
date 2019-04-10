import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = friend => {
    const savedList = this.state.savedList;
    savedList.push(friend);
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome To Friend List!</h1>
        <div className='cards'>
          <Route exact path='/' component={FriendsList} />
        </div>
      </div>
    );
  }
}

export default App;
