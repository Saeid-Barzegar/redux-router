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
import { Switch, Route, withRouter } from 'react-router-dom'
// import connect from react-redux to map state to component props
import { connect } from "react-redux";

// import components for call in Routes
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


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
        {/* make Main Router */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
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