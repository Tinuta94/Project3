import React, { Component } from 'react';
import axios from 'axios'
import NewMovieForm from './NewMovieForm';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                this.setState({ movies: res.data })
            })
    }

    handleClickAddNewMovieForm = () => {
        this.setState((state) => {
            return { isAddNewMovieFormDisplayed: !state.isAddNewMovieFormDisplayed }
        })
        this.setState({
            newMovie:
            {
                typeId: this.props.type._id,
            }
        })

    }

    handleInputChange = (event) => {
        const copiedNewMovie = { ...this.state.newMovie }
        copiedNewMovie[event.target.name] = event.target.value

        this.setState({ newMovie: copiedNewMovie })
    }

    handleAddNewForm = () => {
        axios.post(`/api/types/${this.props.type._id}/movies`, this.state.newMovie)
            .then(() => {
                this.setState({ isAddNewMovieFormDisplayed: false })
                this.getAllMovies()
            })
    }

    render() {

        let moviesList = this.state.movies.map((movie) => {
            return (
                <div class="movcont" >


                    <Card  >
                        <CardActionArea>
                            <Link
                                key={movie._id}
                                to={`/types/${this.props.match.params.typeId}/movies/${movie._id}`}
                            >  <CardMedia
                                    component="img"
                                    className="typephoto"
                                    image={movie.imageLink}
                                />   </Link>
                            <div class="back">
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.name}
                                    </Typography>

                                </CardContent>
                            </div>
                        </CardActionArea>
                    </Card>




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
                : <div class="movielistcontainer">
                    <div class="movieslist">
                        {moviesList}
                    </div>
                    <div class="moviebutton">
                        <Button variant="contained" onClick={this.handleClickAddNewMovieForm} >
                            Add New
      </Button>
                    </div> <br></br>
                    <br></br>


                </div>
        )
    }
}
