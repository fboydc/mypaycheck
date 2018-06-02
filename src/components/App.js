import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cashflow from './Cashflow';
import Parameters from './Parameters';
import '../css/grid.css';
import '../css/App.css';

import Navmenu from './Navmenu';

class App extends Component {
  render() {
    return (
      <div className="grid">
      	<Navmenu />
      	<Switch>
      		<Route exact path='/' component={Dashboard}/>
          <Route exact path='/cashflow' component={Cashflow} />
      		<Route exact path='/parameters' component={Parameters} />
      	</Switch>
      </div>
    );
  }
}

export default App;
