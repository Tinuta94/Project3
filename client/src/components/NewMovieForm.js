import React, { Component } from 'react';


export default class movies extends Component {

    handleSumbit = (event) => {
        event.preventDefault()

        this.props.handleAddNewForm()
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSumbit}>
                <label >Movie name: </label>
                <input type="text" name="name" onChange={this.props.handleInputChange}
                    value={this.props.newMovie.movie}
                />
                <label>Year: </label>
                <input  type="text" 
                    name="year"  onChange={this.props.handleInputChange} value={this.props.newMovie.year}
                    />
                <label >Image :</label>
                <input type="text" name="imageLink" onChange={this.props.handleInputChange}  value={this.props.newMovie.imageLink}
                />
                 <input type="submit" value="Add"/> 
            </form>
        </div>
        );
    }
}
