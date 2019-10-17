import React, { Component } from 'react';


export default class NewTypeForm extends Component {
    render() {
        return (
        <div>
            <form onSubmit={this.props.handleAddNewForm}>
                <label >Type Name:</label>
                <input 
                    id="type-name"
                    type="text"
                    name="name"
                    onChange={this.props.handleInputChange}
                    value={this.props.newType.name}
                />
                <label htmlFor="image-link">Image:</label>
                <input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.props.handleInputChange}
                    value={this.props.newType.imageLink}
                    />
                   
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}
