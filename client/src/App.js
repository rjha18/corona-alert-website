import './App.css';
import React, { Component } from 'react';
import Summary from './Components/Summary'
import Breakdown from './Components/Breakdown'
import News from './Components/News'
import EmailEntry from './Components/EmailEntry'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core';
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
            <Paper>
              <Typography variant = "h2" align = "center">Coronavirus Alert Website</Typography>    
              <div className="App">
                  <Summary/>
                  <EmailEntry/>
                  <News news = {this.state.news}/>
                  <Breakdown/>
              </div>
            </Paper>     
          </ThemeProvider>


        );
    }
}


export default App


