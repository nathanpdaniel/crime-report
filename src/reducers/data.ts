import { FETCH_NATIONAL_DATA, RECEIVE_NATIONAL_DATA } from '../constants';
import { BaseState, BaseAction } from '../types';

export function data(state: BaseState = {}, action: BaseAction): BaseState {
  switch (action.type) {
    case FETCH_NATIONAL_DATA:
      return { ...state, fetching: true };
    case RECEIVE_NATIONAL_DATA:
      return { ...state, fetching: false, ...action.payload };
    default:
      return state;
  }
}