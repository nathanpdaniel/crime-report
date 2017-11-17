import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
