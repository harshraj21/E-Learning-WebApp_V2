import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Aux from './hoc/Aux/Aux';
import { authCheckState } from './store/actions/auth';

import Login from './Application/Containers/Auth/Login/Login';
import Logout from './Application/Containers/Auth/Logout/Logout';
import Register from './Application/Containers/Auth/Register/Register'
import Reset from './Application/Containers/Auth/Reset/Reset'
import Notice from './Application/Containers/Dashboard/Notice/Notice';
import NavBar from './Application/Components/NavBar/NavBar';
import Profile from './Application/Containers/Dashboard/Profile/Profile';
import Sidebar from './Application/Components/Sidebar/Sidebar';
import Class from './Application/Containers/Dashboard/Recorded/Recorded';
import Live from './Application/Containers/Dashboard/Live/Live';
import Help from './Application/Containers/Dashboard/Help/Help';
import Result from './Application/Containers/Dashboard/Result/Result'

class App extends Component {

  componentDidMount() {
    this.props.checklogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={Reset} />
        <Redirect to="/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/dashboard/notice" component={Notice} />
          <Route path="/dashboard/class" component={Class} />
          <Route path="/dashboard/live" component={Live} />
          <Route path="/dashboard/help" component={Help} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/result" component={Result} />
          <Route path="/dashboard/logout" component={Logout} />
          <Redirect to="/dashboard/notice" />
        </Switch>
      );
    }

    return (
      <Aux>
        <NavBar authenticated={this.props.isAuthenticated} />
        {routes}
        {this.props.isAuthenticated ? <Sidebar /> : null}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isAuthenticated: state.auth.token !== null
    isAuthenticated: true
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checklogin: () => dispatch(authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
