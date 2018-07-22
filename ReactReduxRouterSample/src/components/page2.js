import React from 'react';
import { withRouter } from 'react-router-dom'
import { Router, Route, Switch, HashRouter } from 'react-router-dom'
import Alt1 from './alt1'
import Alt2 from './alt2'
import { connect } from 'react-redux'

class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateToPage1 = () => {
        this.props.history.push("/page1");
    }

    navigateToAlt1 = () => {
        this.props.history.push("/page2/alt1");
    }

    navigateToAlt2 = () => {
        this.props.history.push("/page2/alt2");
    }

    render() {
        return <div style={{ backgroundColor: 'gray', height: '380px' }}>
            <div>Page 2 Sayfa {this.props.APPTITLE} User: {this.props.USERNAME}
            <button onClick={this.navigateToPage1}>Page1</button>
            </div>
            <div style={{ width: '100px',height:'300px', float: 'left', background: '#EEEEEE' }}>
            MENU<br />
            <button onClick={this.navigateToAlt1}>Alt1</button><br />
            <button onClick={this.navigateToAlt2}>Alt2</button>
            </div>
            <div style={{ width: '350px', height:'300px',float: 'left', background: '#FF0000', color:'white' }}>
                <Switch>
                    <Route exact path='/page2' component={Alt1} /> 
                    <Route path='/page2/alt1' component={Alt1} />
                    <Route path='/page2/alt2' component={Alt2} />
                </Switch>
            </div>
        </div>
    }
}

 

const mapStateToProps = (state, ownProps) => ({ 
    USERNAME: state.reducer1.username,
    APPTITLE: state.reducer2.appTitle
})

export default connect(mapStateToProps)(withRouter(Page2));
