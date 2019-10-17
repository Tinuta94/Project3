import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import MoviesList from './MoviesList.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


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
                this.setState({ type: res.data })
            })
        this.getAllMovies()
    }

    getAllMovies() {
        axios.get('/api/movies')
            .then((res) => {
                console.log(res)
                this.setState({ movies: res.data })
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleInputChange = (event) => {
        const copiedType = { ...this.state.type }
        copiedType[event.target.name] = event.target.value

        this.setState({ type: copiedType })
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
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />

        }

        return (
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.handleSubmitChanges}>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Name"
                        type="text"
                        name="name"
                        value={this.state.type.name}
                        onChange={this.handleInputChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Image URL"
                        type="text"
                        name="imageLink"
                        onChange={this.handleInputChange}
                        value={this.state.type.imageLink}
                        margin="normal"
                        variant="outlined"
                    />

                    <div class="update">
                        <Button variant="contained" type="submit">
                            Update
                   </Button>
                    </div>

                </form>

                : <div class="typemovie">
                    <div class="singletype">
                        <Card  >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className="typephoto"
                                    image={this.state.type.imageLink}
                                />
                                <div class="back">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.state.type.name} <br></br>



                                        </Typography>

                                    </CardContent>
                                    <Button variant="contained" onClick={this.handleToggleEditForm}>
                                        Edit
                        </Button>  &nbsp;  &nbsp;
                                            <Button variant="contained" onClick={this.handleDeleteType}>
                                        Delete
                        </Button>
                                </div>
                            </CardActionArea>
                        </Card>

                    </div>


                    <div class="moviecomp">
                        <MoviesList
                            type={this.state.type}
                            match={this.props.match}
                        />
                    </div>
                </div>
        );
    }
}
