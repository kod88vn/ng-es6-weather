class WeatherController {
  constructor() {
    'ngInject';
    this.name = 'weather';
    this.forecastConfig = {};
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(zipCode) {
    this._zipCode = zipCode;
    if (zipCode.length !== 5) {
      this.clearForecast();

      return;
    }

    this.refreshForecast(zipCode);
  }

  clearForecast() {
    this.forecastConfig.context.clear();
  }

  refreshForecast(zipCode) {
    this.forecastConfig.context.refresh();
  }
}

export default WeatherController;
