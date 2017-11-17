import * as constants from '../constants';

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