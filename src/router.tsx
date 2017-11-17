import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './containers/Main';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" >
        <IndexRoute component={Main} />
        {/* <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} /> */}
      </Route>
    </Router>
  );
};

export default AppRouter;