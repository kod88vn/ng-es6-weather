class ForecastController {
  constructor(OpenWeatherDa) {
    'ngInject';
    this.OpenWeatherDa = OpenWeatherDa;
    this.config.sub = this;
  }

  clear() {
    this.forecast = null;
  }

  refresh (zipCode) {
    this.OpenWeatherDa.getForeCast(zipCode).then( forecast => {
      if(forecast.cod == 404) {
        console.error('zipcode not found');
        return;
      }

      this.forecast = forecast;
      this.forecast.list.forEach(fc => {
        fc.dtDisplay = new Date(fc.dt * 1000).toDateString();
      });
    });
  }
}

export default ForecastController;
