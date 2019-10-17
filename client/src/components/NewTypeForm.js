import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class NewTypeForm extends Component {
    render() {
        return (
        <div>
            <form onSubmit={this.props.handleAddNewForm}>

            <TextField
        id="outlined-uncontrolled"
        label="Name"
        type="text"
        name="name"
        onChange={this.props.handleInputChange}
        value={this.props.newType.name}
     
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Image URL"
        type="text"
        name="imageLink"
        onChange={this.props.handleInputChange}
        value={this.props.newType.imageLink}
        margin="normal"
        variant="outlined"
      />
               <div class="newtypebutton">
                   <Button variant="contained" type="submit">
                       Submit
                   </Button>
               </div>
                   
            </form>
        </div>
        );
    }
}
