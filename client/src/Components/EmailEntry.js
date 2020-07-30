import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core'


export class EmailEntry extends Component {
    constructor(props){
        super(props);
        this.state = {error: false, curEmail: ''};
    }

    addEmail = () => {
        if (!this.state.error){
            let emailBody = JSON.stringify({
                email: this.state.curEmail
            });
            fetch('/users', {
                method: 'POST',
                body: emailBody,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            alert("Thank you for signing up");
            localStorage.setItem('email', this.state.curEmail);
            this.props.signUp();
        } else {
            alert('Not an email');
        }
    }

    onChange = (e) => {
        //https://ihateregex.io/expr/email#
        let emailRegex = RegExp(`[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+`)
        this.setState({error: !(emailRegex.test(e.target.value) || e.target.value == '')})
        this.setState({curEmail: e.target.value})
    }
    render() {
        return (
            <div style = {{padding: '5px'}}>
                <Typography variant = "h4">Email Signup</Typography>
                <TextField
                error = {this.state.error}
                id = 'emailEntry'
                style = {{minWidth : '50%'}}
                id="outlined-error-helper-text"
                label="Email Signup"
                helperText={this.state.error ? "Incorrect entry.": ''}
                variant="outlined"
                onChange = {this.onChange}
                />
                <Button style = {{height: '4em', marginLeft : '5px'}} variant="outlined" id = "entryButton" type = "button" 
                onClick = {this.addEmail}>Submit</Button>
            </div>

        )
    }
}

export default EmailEntry
