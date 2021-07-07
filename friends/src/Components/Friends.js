import React, { Component } from 'react';
import Friend from './Friend';

export default class Friends extends Component {
    render() {
        return (
            <div className = 'Friends'>
                <ul>
                    {this.props.friends.map(friend => {
                        return (
                            <Friend
                                id = {friend.id}
                                name = {friend.name}
                                age = {friend.age}
                                email = {friend.email}
                                key = {friend.id}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Friend.defaultProps = {
    friends: [],
};

