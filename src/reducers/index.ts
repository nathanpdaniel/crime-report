import { combineReducers } from 'redux';

import { enthusiasm, State as EnthusiasmState } from './enthusiasm';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  enthusiasm: EnthusiasmState;
}

export interface RootAction {
  type: string;
}

const rootReducer = combineReducers<RootState>({
  enthusiasm,
});

export default rootReducer;