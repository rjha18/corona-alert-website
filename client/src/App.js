import './App.css';
import React, { Component } from 'react';
import Summary from './Components/Summary'
import Breakdown from './Components/Breakdown'
import News from './Components/News'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import {
  HashRouter as Router,
  Switch,
  Route} from 'react-router-dom';

export class App extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
                <Summary/>
                <News news = {this.state.news}/>
                <Breakdown/>
            </div>
        );
    }
}


export default App
