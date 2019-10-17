import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
       <div class="singlmoviecont">
            <div class="singlemovie">
                <Card >
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         className="typephoto"
                         image={this.state.movie.imageLink}
                       />
                       <div class="back">
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="h2">
                        {this.state.movie.name} <br></br>
                      </Typography>
                         
                       </CardContent>
                       <Button variant="contained" onClick={this.handleDeleteMovie} >
        Delete 
      </Button>  &nbsp; 
   
    <Button variant="contained"  onClick={() => this.props.handleAddToWatch(this.state.movie)}>
        Add To My List
    </Button>
                       </div>
                     </CardActionArea>
                     </Card>
                </div>
       
                  </div> 
        );
    }
}
