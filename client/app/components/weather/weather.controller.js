class WeatherController {
  constructor(Forecasts) {
    'ngInject';
    this.Forecasts = Forecasts;
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(val) {
    this._zipCode = val;
    if (val.length !== 5) {
      this.Forecasts.clear();
      
      return;
    }

    this.Forecasts.refresh();
  }
}

export default WeatherController;
