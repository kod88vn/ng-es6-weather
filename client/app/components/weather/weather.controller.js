class WeatherController {
  constructor(Forecasts, OpenWeather) {
    'ngInject';
    this.Forecasts = Forecasts;
    this.OpenWeather = OpenWeather;
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

    this.OpenWeather.setZipCode(val);
    this.Forecasts.refresh();
  }
}

export default WeatherController;
