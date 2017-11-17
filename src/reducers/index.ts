import { combineReducers } from 'redux';

import { data, State as AppDataState } from './data';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  data: AppDataState;
}

export interface RootAction {
  type: string;
}

const rootReducer = combineReducers<RootState>({
  data,
});

export default rootReducer;