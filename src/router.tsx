import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" >
        <IndexRoute component={Main} />
        {/* <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} /> */}
      </Route>
    </Router>
  );
};

export default AppRouter;