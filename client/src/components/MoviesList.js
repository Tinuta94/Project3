import React, { Component } from 'react';
import axios from 'axios'
import NewMovieForm from './NewMovieForm';
import {Link} from 'react-router-dom'

export default class MoviesList extends Component {

    state = {
        isAddNewMovieFormDisplayed: false,
        movies: [],
        newMovie: {
            name: "",
            typeId: "",
            year: "",
            imageLink: ""
        }
    }

    componentDidMount() {
        this.getAllMovies()
    }
    
    getAllMovies = () => {
        axios.get(`/api/types/${this.props.match.params.typeId}/movies`)
            .then((res) => {
                this.setState({movies: res.data})
            })
    }

    handleClickAddNewMovieForm = () => {
        this.setState((state) => {
            return {isAddNewMovieFormDisplayed: !state.isAddNewMovieFormDisplayed}
        })
        this.setState({
            newMovie: 
                {
                    typeId: this.props.type._id,
                }
        })

    }

    handleInputChange = (event) => {
        const copiedNewMovie = {...this.state.newMovie}
        copiedNewMovie[event.target.name] = event.target.value

        this.setState({newMovie: copiedNewMovie})
    }

    handleAddNewForm = () => {
        axios.post(`/api/types/${this.props.type._id}/movies`, this.state.newMovie)
            .then(() => {
                this.setState({isAddNewMovieFormDisplayed: false})
                this.getAllMovies()
            })
    }

    render() {

        let moviesList = this.state.movies.map((movie) => {
            return  (
                <div >
                    <h5>
                        <Link 
                            key={movie._id} 
                            to={`/types/${this.props.match.params.typeId}/movies/${movie._id}`}
                        >
                            {movie.name} - {movie.year}
                        </Link>
                    </h5>
                    <img  src={movie.imageLink} alt={movie.name}/>        
                </div>
            )
        })

        return (
            this.state.isAddNewMovieFormDisplayed
            ? <NewMovieForm 
                movies={this.state.movies}
                newMovie={this.state.newMovie}
                handleInputChange={this.handleInputChange}
                handleAddNewForm={this.handleAddNewForm}
            />
            : <div>
                <div >
                    {moviesList}
                </div>
            <button onClick={this.handleClickAddNewMovieForm}>Add New Movie</button> 
            </div>
        )
    }
}