class WeatherController {
  constructor(OpenWeather) {
    'ngInject';
    var vm = this;
    vm.OpenWeather = OpenWeather;
    vm.forecastConfig = {
      actions: {
        refresh: function() {}, // implement in forecast component
        clear: function() {} // implement in forecast component
      }
    };
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(val) {
    this._zipCode = val;
    if (val.length !== 5) {
      this.forecastConfig.actions.clear();

      return;
    }

    this.OpenWeather.setZipCode(val);
    this.forecastConfig.actions.refresh();
  }
}

export default WeatherController;
