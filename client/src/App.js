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
    constructor(props){
      super(props);
      this.state = {
        users: [],
        news: []};
    }
    theme = () => createMuiTheme({
      palette: {
        type: "light"
      }
    });

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        fetch('/news')
        .then(res => res.json())
        .then(news => this.setState({ news }));
          
    }

    render() {
        return (
          <ThemeProvider theme = {this.theme()}>          
            <Paper style = {{borderRadius: '0px'}}>
              <div className="App">
                  {this.state.users.map(user =>
                      <div key={user.id}>{user.username}</div>
                  )}
                  <Summary/>
                  <News news = {this.state.news}/>
                  <Breakdown/>
              </div>
            </Paper>
          </ThemeProvider>


        );
    }
}


export default App


