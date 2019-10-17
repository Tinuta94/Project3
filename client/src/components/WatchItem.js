import React, { Component } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default class WatchItem extends Component {
    state = {
        watchItem: {
        }
    }

    componentDidMount() {
        Axios.get(`/api/watch/${this.props.id}`)
            .then((res) => {
                console.log(res)
                this.setState({ watchItem: res.data })
            })
    }

    handleRemoveFromWatch = () => {
        Axios.delete(`/api/watch/${this.state.watchItem._id}`)
            .then(() => {
                this.props.getWatchItems()
            })
    }

    render() {
        return (
            <div class="contitem">
                <div class="oneitem">

                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className="typephoto"
                                image={this.state.watchItem.item && this.state.watchItem.item.imageLink}
                            />
                            <div class="back">
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {this.state.watchItem.item && this.state.watchItem.item.name} <br></br>
                                        {this.state.watchItem.item && this.state.watchItem.item.year}<br></br>
                                        <br></br>

                                    </Typography>

                                </CardContent>

                            </div>

                        </CardActionArea>
                    </Card>
                    <div class="watchdeleteitem">
                        <Button variant="contained" onClick={this.handleRemoveFromWatch} >Delete </Button>
                    </div>
                </div>

            </div>





        );
    }
}
