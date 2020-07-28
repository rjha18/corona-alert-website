import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core'

export class EmailEntry extends Component {
    constructor(props){
        super(props);
        this.state = {error: false};
    }

    addEmail = () => {

    }

    onChange = (e) => {
        console.log(e.target)
        //https://ihateregex.io/expr/email#
        let emailRegex = RegExp(`[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+`)
        this.setState({error: !(emailRegex.test(e.target.value) || e.target.value == '')});
    }
    render() {
        return (
            <div style = {{padding: '5px', borderBottomStyle: 'solid', borderColor: 'black'}}>
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
                <Button style = {{height: '4em', marginLeft : '5px'}} variant="outlined" id = "entryButton" type = "button" onClick = {this.addEmail}>Submit</Button>
            </div>

        )
    }
}

export default EmailEntry
