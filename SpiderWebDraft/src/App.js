import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Players from './Players';
import Player from './Player';

import { loadPlayers } from './store';

class App extends Component{
  componentDidMount(){
    this.props.init();
  }

  render(){
    return (
      <div>
        <Router>
          <div>
            <Route component={ ({ location })=> <Nav path={ location.pathname }/> } />
            <Route link='/players' component={Players} />
            <Route link='/player' component={Player} />
          </div>
        </Router>
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch)=> {
  return {
    init: ()=> dispatch(loadPlayers()),
  };
};

export default connect(null, mapDispatchToProps)(App);
