import React, { Component } from 'react';
import axios from 'axios';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            age : '',
            email : ''
        }
    }

    addFriend = event => {
        this.friendInfo({
            'name' : `${this.state.name}`,
            'age' : `${this.state.age}`,
            'email' : `${this.state.email}`
        })
    }

    friendInfo = friend => {
        axios.post('http://localhost:5000/friends', friend)
        .then(response => console.log(response))
        .catch(err => console.log( 'RED ALERT THIS IS NOT A TEST', err))
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className = 'SignUpForm'>
                <form onSubmit = {this.addFriend}>
                    <input
                        onChange = { this.handleInputChange}
                        placeholder = 'name'
                        value = {this.state.name}
                        name = 'name'
                    />
                    <input
                        onChange = { this.handleInputChange}
                        placeholder = 'age'
                        value = {this.state.age}
                        name = 'age'
                    />
                    <input
                        onChange = { this.handleInputChange}
                        placeholder = 'email'
                        value = {this.state.email}
                        name = 'email'
                    />
                    <button type='submit'>Register Friend!</button>
                </form>
            </div>
        );
    }
}