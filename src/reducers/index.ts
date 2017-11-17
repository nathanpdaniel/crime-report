import { combineReducers } from 'redux';

import { data } from './data';

export interface State {
  data: {};
}

export const state = combineReducers<State>({
  data,
});