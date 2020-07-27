import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


export class App extends Component {

    state = {
        users: []
    }

    render() {    

        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

}


export default App;
