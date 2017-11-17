import { BASE_CRIME_URL, CRIME_KEY, BASE_CENSUS_URL, CENSUS_KEY } from '../constants';

export const getCodes = () => {
  return fetch(`${BASE_CRIME_URL}/codes?api_key=${CRIME_KEY}`);
};

export const getCodesByTableId = (tableId: string) => {
  return fetch(`${BASE_CRIME_URL}/${tableId}?api_key=${CRIME_KEY}`);
};

export const getNationalEstimates = () => {
  return fetch(`${BASE_CRIME_URL}/estimates/national?api_key=${CRIME_KEY}`);
};

export const getCensusData = () => {
  return fetch(`${BASE_CENSUS_URL}/?key=${CENSUS_KEY}`);
};

export default getCodes;