import React, { Component } from 'react';
import WatchView from './WatchView.js';
import SingleMovie from './SingleMovie.js'
import MoviesList from './MoviesList.js'
import SingleType from './SingleType.js';
import Types from './Types.js'
import {Route, Switch,Link} from 'react-router-dom'
import Axios from 'axios'
import { Container, Row, Col } from 'reactstrap';


export default class Homepage extends Component {

    state = {
        watchItems: [],
        
    }

    componentDidMount() {
        this.getWatchItems()
    }

    getWatchItems = () => {
        Axios.get('/api/watch')
            .then((res) => {
                this.setState({watchItems: res.data})
            })
    }

    handleAddToWatch = (movie) => {
        Axios.post('/api/watch', {item: movie})
            .then(() => {
                this.getWatchItems()
            })
    }

   

    render() {

        let SingleMovieComponent = (props) => {
            return (
                <SingleMovie
                    handleAddToWatch={this.handleAddToWatch}
                     {...props}
                />
            )
        }

      
        let TypesListComponent = () => {
            return (
                <Types/>
            )
        }

        let SingleTypeComponent = (props) => {
            return (
                <SingleType
                   {...props}
                />
            )
        }

        return (
            <div>
                  <Container>
                    <Row className="body">
                        <Col xs="8" className="firstpart">
                            <Switch>
                                <Route path="/types/:typeId/movies/:movieId" render={SingleMovieComponent} />
                                <Route path="/types/:typeId/movies" component={MoviesList} />
                               
                                <Route path="/types/:typeId" render={SingleTypeComponent} />
                                <Route exact path="/" render={TypesListComponent} />
                            </Switch>
                    
                            </Col>
                        <Col xs="4" className="cart-component">
                               <WatchView
                                watchItems={this.state.watchItems}
                                getWatchItems={this.getWatchItems}
                            />
                               </Col>
                    </Row>
                </Container>
                       
            </div>
        );
    }
}
