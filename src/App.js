import React, { Component } from 'react';
//import navigation Menu
import Nav from './components/Nav'
/* 
    Switch and Route imported to make Main Router
    Notice:
    " when you use connect() method from redux to map redux state 
      to component props you mus use 'withRouter' to working router properly.
      if you dont use this method Your Router Not works
    "
*/
import { withRouter } from 'react-router-dom'
import Router from './router/router'

// import connect from react-redux to map state to component props
import { connect } from "react-redux";


class App extends Component {
  render() {
    // get information from props
    let { information } = this.props
    return (
      <div className="container">
        <Nav />
        <hr />
        <span>Programmer: {information.name}</span>
        <hr />
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  information: state.myInfo
})
// this is so important to use this methods with this priority
// withRouter -> connect -> (state)(component)
export default withRouter(connect(mapStateToProps)(App))