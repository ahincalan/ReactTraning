import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
 
class Alt1 extends React.Component {
    constructor(props) {
        super(props); 
    } 
 
    render() {
        return <div  style={{  }}> 
            Alt 1 Sayfa 
        </div>
    }
} 

export default withRouter(Alt1);