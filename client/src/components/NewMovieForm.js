import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class movies extends Component {

    handleSumbit = (event) => {
        event.preventDefault()

        this.props.handleAddNewForm()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <TextField type="text" name="name" onChange={this.props.handleInputChange}
                        id="outlined-uncontrolled"
                        label="Movie Name"
                        value={this.props.newMovie.movie}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Year"
                        value={this.props.newMovie.year}
                        type="text"
                        name="year" onChange={this.props.handleInputChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Image URL"
                        value={this.props.newMovie.imageLink}
                        type="text" name="imageLink" onChange={this.props.handleInputChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <div class="newmoviebutton">
                        <Button variant="contained" type="submit">
                            Submit
      </Button>
                    </div>
                </form>
            </div>
        );
    }
}
