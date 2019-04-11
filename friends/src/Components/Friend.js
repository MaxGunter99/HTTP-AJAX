// import React from 'react';
// import axios from 'axios';

// function Friend(props) {
//     const friend = props.friends.find(
//         thing => `${thing.id}` === props.match.params.id
//     );

//     if (!props.friends.length || !friend){
//         return <div>Loading....</div>
//     }


//     return (
//         <div className='friend'>
//             <h4><strong>{friend.name}</strong></h4>
//             <p>{friend.age} years old</p>
//             <p>contact at {friend.email}</p>
//             <button onClick={() => props.deleteItem(friend.id)}>Delete Item</button>
//         </div>
//     );
// }

// export default Friend;



import React, { Component } from 'react';
import axios from'axios';


class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const friend = this.props.friends.find(friend => String(friend.id) === id )
        this.setState(() => ({ friend: friend }))
        console.log(friend);
        console.log(typeof id);
    }
    deleteItem = id => {
        axios
          .delete(`http://localhost:5000/friends/${id}`)
            .then(res => {
                this.setState({ friend: res.data });
                this.props.history.push('');
            })
          .catch(err => console.log(err));
      };

    render() {

        if (!this.state.friend){
            return <div>Loading....</div>
        }

        const { name, age, email, id } = this.state.friend;

        return (
            <div className='friend'>
                <h4><strong>{name}</strong></h4>
                <p>{age} years old</p>
                <p>contact at {email}</p>
                <a href='http://localhost:3000/'><button onClick={() => this.deleteItem(this.state.friend.id)}>Delete Item</button></a>
            </div>
        );
    }
}

export default Friend;