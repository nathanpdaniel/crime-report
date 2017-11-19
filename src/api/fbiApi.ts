import * as _ from 'lodash';
import { INationalEstimateResponse, INationalEstimate } from '../model/index';

class FBIApi {
  private KEY: string = 'XfeOp6MHONV7reiOTLaG3R9HJZwYpy4ZTXlhNU3a';
  private URL: string = 'https://api.usa.gov/crime/fbi/ucr/';
  private CAPITA: number = 100000;

  public getCodes() {
    return fetch(`${this.URL}/codes?api_key=${this.KEY}`);
  }
  
  public getCodesByTableId = (tableId: string) => {
    return fetch(`${this.URL}/${tableId}?api_key=${this.KEY}`);
  }

  public getNationalEstimates() {
    return fetch(`${this.URL}/estimates/national?api_key=${this.KEY}&per_page=1000`)
      .then(response => response.json())
      .then(response => {
        const resp = <INationalEstimateResponse> response;
        return this.addRates(resp);
      });
  }

  private addRates(d: INationalEstimateResponse): INationalEstimateResponse {
    _.map(d.results, (item: INationalEstimate) => {
      item.homicide_rate = this.getRate('homicide', item);
      item.property_crime_rate = this.getRate('property_crime', item);
      item.violent_crime_rate = this.getRate('violent_crime', item);
      item.larceny_rate = this.getRate('larceny', item);
      item.rape_legacy_rate = this.getRate('rape_legacy', item);
      item.robbery_rate = this.getRate('robbery', item);
      item.aggravated_assault_rate = this.getRate('aggravated_assault', item);
      item.burglary_rate = this.getRate('burglary', item);
      item.motor_vehicle_theft_rate = this.getRate('motor_vehicle_theft', item);
      item.rape_revised_rate = this.getRate('rape_revised', item);
    });
    return d;
  }

  private getRate(key: string, d: INationalEstimate): number | null {
    if (!d[key]) {
      return null;
    }
    return Number(Number(d[key] / d.population * this.CAPITA).toFixed(2));
  }

}

export default new FBIApi();