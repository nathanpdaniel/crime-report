class CensusAPI {
  private URL = 'https://api.census.gov/data';
  private KEY = '330b54d24a319eb828393d96337eef6bd36f465a';
  public getData() {
    return fetch(`${this.URL}?key=${this.KEY}`);
  }
}

export default new CensusAPI();