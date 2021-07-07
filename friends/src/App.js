import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Friend from './Components/Friend';
import FriendForm from './Components/FriendForm';
import FriendsList from './FriendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      console.log(response);
      this.setState(() => ({friends: response.data}))
    })
    .catch(err => console.log( 'this is not a test, error' , err))
  }  

  render() {
    return (
      <div className="App">
        <div className='Navigation'>
          <NavLink className = 'nav' to = '/'>Home</NavLink>
          <NavLink className = 'nav' to = '/friends-form'>Add a Friend</NavLink>
        </div>
        <h1>Welcome To Friend List!</h1>
        <Route exact path ='/' render ={ (props) => {
          return(<FriendsList {...props} friends={this.state.friends} />)

        }} />
        <Route path="/friends/:id" render={ (props) => {
          return(<Friend {...props} friends={this.state.friends} />)
        }} />
        <Route exact path = '/friends-form'
          render = { props => (
          <FriendForm {...props} />
        )}
        />
      </div>
    );
  }
}

export default App;
