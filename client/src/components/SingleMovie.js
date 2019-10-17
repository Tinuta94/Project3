import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'


export default class SingleMovie extends Component {

    state = {
        movie: {},
        redirectToHome: false,
        
    }

    componentDidMount() {
        Axios.get(`/api/types/${this.props.match.params.typeId}/movies/${this.props.match.params.movieId}`)
            .then((res) => {
                this.setState({ movie: res.data })
            })
    }


    handleDeleteMovie = () => {
        Axios.delete(`/api/types/${this.state.movie.typeId}/movies/${this.state.movie._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }

        return (

            <div>
                <div >
                    <h1>{this.state.movie.name}</h1>
                    <h3>{this.state.movie.year}</h3>
                    <img src={this.state.movie.imageLink} alt={this.state.movie.name} />
                </div>
                <button onClick={this.handleDeleteMovie}>Delete Listing</button>
                <button onClick={() => this.props.handleAddToWatch(this.state.movie)}>Add to Your List</button>
        </div>
        );
    }
}
