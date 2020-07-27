import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './Components/Summary'
import Breakdown from './Components/Breakdown'
import News from './Components/News'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import {
  HashRouter as Router,
  Switch,
  Route} from 'react-router-dom';

const darkModeCookieTag = 'darkMode'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {news : [[]]}
  }
  theme = () => (createMuiTheme({
    palette: {
      type: "dark"
    }
  }));
  render() {
    return (
          <div className= 'App'>
            <Summary/>
            <News news = {this.state.news}/>
            <Breakdown/>
          </div>
    );
  }

}


export default App
