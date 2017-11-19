export interface INationalEstimate {
  property_crime: number;
  property_crime_rate: number | null;
  violent_crime: number;
  violent_crime_rate: number | null;
  larceny: number;
  larceny_rate: number | null;
  rape_legacy: number;
  rape_legacy_rate: number | null;
  homicide: number;
  homicide_rate: number | null;
  caveats?: any;
  robbery: number;
  robbery_rate: number | null;
  aggravated_assault: number;
  aggravated_assault_rate: number | null;
  burglary: number;
  burglary_rate: number | null;
  motor_vehicle_theft: number;
  motor_vehicle_theft_rate: number | null;
  rape_revised: number;
  rape_revised_rate: number | null;
  year: number;
  population: number;
}