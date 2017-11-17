import { BASE_URL, DATA_KEY, CENSUS_KEY } from '../constants';

export const getCodes = () => {
  return fetch(`${BASE_URL}/codes?api_key=${DATA_KEY}`);
};

export const getCodesByTableId = (tableId: string) => {
  return fetch(`${BASE_URL}/${tableId}?api_key=${DATA_KEY}`);
};

export const getNationalEstimates = () => {
  return fetch(`${BASE_URL}/estimates/national?api_key=${DATA_KEY}`);
};

export const getCensusData = () => {
  return fetch(`${BASE_URL}/?api_key=${CENSUS_KEY}`);
};

export default getCodes;