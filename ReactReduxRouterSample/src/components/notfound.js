import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
 
class NotFound extends React.Component {
    constructor(props) {
        super(props); 
    } 

    navigateToPage1=()=>{
        this.props.history.push("/page1");
    }

    render() {
        return <div>
           NOT FOUND!
            <button onClick={this.navigateToPage1}>Page1</button>
        </div>
    }
} 

export default withRouter(NotFound);