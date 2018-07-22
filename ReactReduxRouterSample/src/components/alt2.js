import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
 
class Alt2 extends React.Component {
    constructor(props) {
        super(props); 
    } 
 
    render() {
        return <div>
            Alt 2 Sayfa 
        </div>
    }
} 

export default withRouter(Alt2);