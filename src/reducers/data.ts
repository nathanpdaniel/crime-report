import { FETCH_NATIONAL_DATA, RECEIVE_NATIONAL_DATA } from '../constants';

export type State = {
  data?: {};
  fetching?: boolean;
};

export type Action = {
  type: string;
  payload?: object;
};

export function data(state: State = { data: {} }, action: Action): State {
  switch (action.type) {
    case FETCH_NATIONAL_DATA:
      return { ...state, fetching: true };
    case RECEIVE_NATIONAL_DATA:
      return { ...state, fetching: false, data: action.payload };
    default:
      return state;
  }
}