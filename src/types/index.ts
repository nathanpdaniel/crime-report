export type BaseState = {
  data?: {};
  fetching?: boolean;
};

export type BaseAction = {
  type: string;
  payload: object;
};

export const enum Colors {
  property_crime = '#5C4B51',
  violent_crime = '#8CBEB2',
  larceny = '#F2EBBF',
  rape_legacy = '#F3B562',
  rape_revised = '#F06060',
  robbery = '#192B38',
  homicide = '#22424B',
  aggravated_assault = '#2E5458',
  burglary = '#4E7367',
  motor_vehicle_theft = '#7FA68C',
  population = '#949494',
}