import React, { Component } from 'react';
import WatchItem from './WatchItem';
import {Link} from 'react-router-dom'

export default class WatchView extends Component {
    
    componentDidMount() {
        this.props.getWatchItems()
    }

    
    
    render() {

        let watchList = this.props.watchItems.map((item) => {
            return (
                <div>
                   
                    <WatchItem 
                        handleRemoveFromWatch={this.handleRemoveFromWatch}
                        getWatchItems={this.props.getWatchItems}
                        id={item._id}
                        key={item._id}
                    />
                </div>
            )
        })

        return (
        <div>
            <h2>Want to Watch</h2>
            
            {watchList}
        </div>
        );
    }
}
