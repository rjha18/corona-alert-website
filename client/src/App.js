import './App.css';
import React, { Component } from 'react';
import Summary from './Components/Summary'
import Breakdown from './Components/Breakdown'
import News from './Components/News'
import EmailEntry from './Components/EmailEntry'
import Advice from './Components/Advice'
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
        news: [],
        signedUp: true};
    }
    theme = () => createMuiTheme({
      palette: {
        type: "light"
      }
    });

    emailSignedUp = () => {
      this.setState({signedUp: true});
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        fetch('/news')
        .then(res => res.json())
        .then(news => this.setState({ news }));
        let email = localStorage.getItem('email');
        this.setState({signedUp: email != null});
    }

    render() {
      console.log(this.state.users)
        return (
          <ThemeProvider theme = {this.theme()}> 
            <Paper>
              <Typography variant = "h2" align = "center">Coronavirus Alert Website</Typography>    
              <div className="App">
                <Advice/>
                <News news = {this.state.news}/>
                <Summary/>
                {this.state.signedUp ? null:  <EmailEntry signUp = {this.emailSignedUp}/>}
                <Breakdown/>
                <div>Icon made by SmashIcons and Freepik</div>

              </div>
            </Paper>     
          </ThemeProvider>


        );
    }
}


export default App


