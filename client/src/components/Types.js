import React, { Component } from 'react';
import axios from 'axios'
import NewTypeForm from './NewTypeForm.js'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Brands extends Component {

    state = {
        types: [],
        isAddNewFormDisplayed: false,
        newType: {
            name: "",
            imageLink: ""
        }
    }

    componentDidMount() {
        this.getAllTypes()
    }

    getAllTypes = () => {
        axios.get(`/api/types`)
            .then((res) => {
                this.setState({types: res.data})
            })
    }

    handleClickAddNew = () => {
        this.setState((state) => {
            return {isAddNewFormDisplayed: !state.isAddNewFormDisplayed}
        })
    }

    handleInputChange = (event) => {
        const copiedNewType = {...this.state.newType}
        copiedNewType[event.target.name] = event.target.value

        this.setState({newType: copiedNewType})
    }

    handleAddNewForm = (event) => {
        event.preventDefault()

        axios.post('/api/types', this.state.newType)
            .then(() => {
                this.setState({isAddNewFormDisplayed: false})
                this.getAllTypes()
            })
    }

    render() {

        let typesList = this.state.types.map((type) => {
            return (
             
                <div class="typescontainer" key={type._id}>
                     <div class="card">
                    
                   
                     <Card  >
                     <CardActionArea>
                     <Link to={`/types/${type._id}`}>   <CardMedia
                         component="img"
                         className="typephoto"
                         image={type.imageLink}
                       />   </Link>
                        <div class="back">
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="h2">
                         {type.name}
                         </Typography>
                         
                       </CardContent>
                       </div>
                     </CardActionArea>
                     </Card>
                    
                  
                   </div>
                   </div>
          
            )
        })

        return (
            this.state.isAddNewFormDisplayed
            ? <NewTypeForm 
                types={this.state.types}
                newType={this.state.newType}
                handleInputChange={this.handleInputChange}
                handleAddNewForm={this.handleAddNewForm}
            />
            : <div>
                <div class="typeslist">
                    {typesList}
                </div>
                <div class="typesbutton">
                <Button variant="contained" onClick={this.handleClickAddNew}>Add New</Button> <br></br>
                <br></br>
              </div>
            </div>
           
        );
    }
}
