import { Dispatch } from 'react-redux';
import * as constants from '../constants';
import FBI from '../api/fbiApi';
import { INationalEstimateResponse } from '../model/index';

export interface FetchNationalData {
  type: constants.FETCH_NATIONAL_DATA;
}

export interface ReceiveNationalData {
  type: constants.RECEIVE_NATIONAL_DATA;
}

export type DataAction = FetchNationalData | ReceiveNationalData;

export function getNationalData(): DataAction {
  return {
    type: constants.FETCH_NATIONAL_DATA,
  };
}

const receiveNationalEstimates = (payload: INationalEstimateResponse) => {
  return {
    type: constants.RECEIVE_NATIONAL_DATA,
    payload,
  };
};

export const getNationalEstimates = () => (dispatch: Dispatch<{}>) => {
  FBI.getNationalEstimates().then((response: INationalEstimateResponse) => {
    dispatch(receiveNationalEstimates(response));
  });
};