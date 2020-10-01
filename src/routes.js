import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Launches from './pages/Launches';
import Notfound from './pages/Notfound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/launches' component={Launches} />
        <Route path='*' component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;