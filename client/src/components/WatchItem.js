import React, { Component } from 'react';
import Axios from 'axios';



export default class WatchItem extends Component {
    state = {
        watchItem: {
        }
    }

    componentDidMount() {
        Axios.get(`/api/watch/${this.props.id}`)
            .then((res) => {
                console.log(res)
                this.setState({watchItem: res.data})
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
                <img src={this.state.watchItem.item && this.state.watchItem.item.imageLink} alt=""/>
              
                    <strong>{this.state.watchItem.item && this.state.watchItem.item.name}</strong>
                    <p>{this.state.watchItem.item && this.state.watchItem.item.year}</p>
                    <button onClick={this.handleRemoveFromWatch}>Remove from Your List</button>
            </div>
      
       
            
            
        </div>
        );
    }
}
