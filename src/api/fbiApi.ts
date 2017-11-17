import { INationalEstimateResponse } from '../model/index';

class FBIApi {
  private KEY: string = 'XfeOp6MHONV7reiOTLaG3R9HJZwYpy4ZTXlhNU3a';
  private URL: string = 'https://api.usa.gov/crime/fbi/ucr/';

  public getCodes() {
    return fetch(`${this.URL}/codes?api_key=${this.KEY}`);
  }
  
  public getCodesByTableId = (tableId: string) => {
    return fetch(`${this.URL}/${tableId}?api_key=${this.KEY}`);
  }

  public getNationalEstimates() {
    return fetch(`${this.URL}/estimates/national?api_key=${this.KEY}&per_page=1000`)
      .then(response => response.json())
      .then((response) => <INationalEstimateResponse> response);
  }

}

export default new FBIApi();