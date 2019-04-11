import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    render() {
        return (
            <div className='friendList'>
                {this.props.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend}/>
                ))}
            </div>
        )
    }
}

function FriendDetails ({ friend }) {

    const { name, age, email } = friend;

    return(
        <div className='friend-card'>
            <p><Link to={`/friends/${friend.id}`}><strong>Name: {name}</strong></Link></p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}