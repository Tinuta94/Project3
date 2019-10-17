import React, { Component } from 'react';
import WatchItem from './WatchItem';
import { Link } from 'react-router-dom'

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
                <hr></hr>
                <div class="watchtext">

                    <h2>My List</h2>
                </div>
                <hr></hr>
                <div class="watchlist">
                    {watchList}
                </div>
            </div>
        );
    }
}
