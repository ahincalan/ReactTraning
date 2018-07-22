import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
//import { UpdateUsername, UpdatePassword, UpdateUserAndPassword, ClearLoginInfo } from "../redux/actions";
import * as actions from "../redux/actions";

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.USERNAME,
            password: props.PASSWORD
        }
    }

    navigateToPage2 = () => {
        this.props.history.push("/page2");
    }

    updateUsername = () => {
        actions.UpdateUsername("Yeni username");
    }

    UserChange = (e) => {
        this.setState({ username: e.target.value });
        //  UpdateUsername(e.target.value);
    }

    login = () => {
        //network cagrısı

        //done oldu
        actions.UpdateUserAndPassword(this.state.username, this.state.password);
    }

    clear = () => {
        actions.ClearLoginInfo();
    }

    PassChange = (e) => {
        this.setState({ password: e.target.value });
        //   UpdatePassword(e.target.value);
    }

    render() {
        return <div style={{ backgroundColor: 'gray', height: '380px' }}>
            Page 1 Sayfa {this.state.username}
            <button onClick={this.navigateToPage2}>Page2</button>
            <button onClick={this.updateUsername}>Update User</button>
            <div>
                Login Form:<br />
                <input type="text" value={this.state.username} onChange={this.UserChange} /><br />
                <input type="password" value={this.state.password} onChange={this.PassChange} /><br />
                <button onClick={this.login} >Login</button>
                <button onClick={this.clear} >Clear</button>
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    USERNAME: state.reducer1.username,
    PASSWORD: state.reducer1.password,
    APPTITLE: state.reducer2.appTitle
})

export default connect(mapStateToProps)(withRouter(Page1));