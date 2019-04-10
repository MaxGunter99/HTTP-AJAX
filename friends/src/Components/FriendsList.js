import React, { Component } from 'react';
import axios from 'axios';
import '../index.css'
import { Link } from 'react-router-dom'
import FriendsForm from './FriendsForm';
// import EventListener, {withOptions} from 'react-event-listener';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data}));
        })
        .catch(error => {
            console.log('ERROR ERROR SOMETHING WRONG HAS HAPPENED HERE, EVACUATE THE AREA, ACTIVATING SELF DESTRUCT SEQUENCE', error);
        });
    }

    render() {
        return (
            <div className='friendList'>
                {this.state.friends.map(friend => (
                    <FriendDeets key={friend.id} friend={friend}/>
                ))}
            </div>
        )
    }
}

function FriendDeets ({ friend }) {
    const { name, age, email } = friend;

    return(
        <div className='friend-card'>
            <button><p><strong>{name}</strong></p></button>
            <p>{age}</p>
            <p>{email}</p>
            <FriendsForm/>
        </div>
    );
}
