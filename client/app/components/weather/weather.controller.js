class WeatherController {
  constructor() {
    'ngInject';
    this.name = 'weather';
    this.forecastConfig = {
      actions: {
        refresh: null, // implement in forecast component
        clear: null // implement in forecast component
      }
    };
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
    this.forecastConfig.actions.clear.call(this.forecastConfig.context);
  }

  refreshForecast(zipCode) {
    this.forecastConfig.actions.refresh.call(this.forecastConfig.context, zipCode);
  }
}

export default WeatherController;
