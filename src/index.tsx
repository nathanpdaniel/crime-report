import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { StoreState } from './types';
import { Provider } from 'react-redux';
import combineReducers from './reducers/combineReducers';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(combineReducers, {
  languageName: '',
  enthusiasmLevel: 1,
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
