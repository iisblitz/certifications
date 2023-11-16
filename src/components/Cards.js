import React from "react"
import {Paper, Box} from '@mui/material';
import {Link} from "react-router-dom"


class Cards extends React.Component{
    render(){
    return(
     
        <Link to={`/${this.props.props.certification}/${this.props.props.name}`} key={this.props.props.id} className="Cards"> 
            <Box className="Cards">
                <Paper elevation = {13} className="Cards">
                    <p className="ImageEx">Image placeholder</p>
                    <h1>Title: {this.props.props.name}</h1>
                    <h4>short: {this.props.props.shortDescription}</h4>
                </Paper>
            </Box>
        </Link>
)}
}

export default Cards