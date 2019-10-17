import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import MoviesList from './MoviesList.js'


export default class SingleType extends Component {

    state = {
        type: {},
        isEditFormDisplayed: false,
        redirectToHome: false,
    }

    componentDidMount() {
        axios.get(`/api/types/${this.props.match.params.typeId}`)
            .then((res) => {
                console.log(res)
                this.setState({type: res.data})
            })
        this.getAllMovies()
    }

    getAllMovies() {
        axios.get('/api/movies')
            .then((res) => {
                console.log(res)
                this.setState({movies: res.data})
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedType = {...this.state.type}
        copiedType[event.target.name] = event.target.value

        this.setState({type: copiedType})
    }

    handleSubmitChanges = (event) => {
        event.preventDefault()

        axios.put(`/api/types/${this.state.type._id}`, this.state.type)
            .then((res) => {
                this.setState({
                    type: res.data,
                    isEditFormDisplayed: false
                })
            })
    }

    handleDeleteType = () => {
        axios.delete(`/api/types/${this.state.type._id}`)
            .then(() => {
                this.setState({redirectToHome: true})
            })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/'/>
            
        }
     
        return (
            this.state.isEditFormDisplayed
            ? <form onSubmit={this.handleSubmitChanges}>
                <label >Type Name</label>
                <input 
                    id="type-name"
                    type="text"
                    name="name"
                    value={this.state.type.name}
                    onChange={this.handleInputChange}
                />
                <label >Image </label>
                <input 
                    id="image-link"
                    type="text"
                    name="imageLink"
                    onChange={this.handleInputChange}
                    value={this.state.type.imageLink}
                />
                <input type="submit" value="Update" />
            </form>
            
            :<div>
                <h1>{this.state.type.name}</h1>
                <img src={this.state.type.imageLink} alt={this.state.type.name} />
                
              <div >
                        <button onClick={this.handleToggleEditForm}>Edit </button>
                        <button onClick={this.handleDeleteType}>Delete </button>
                    </div>
                
                
                  
                <MoviesList 
                    type={this.state.type}
                    match={this.props.match}
                 
                />
            </div>
        );
    }
}
