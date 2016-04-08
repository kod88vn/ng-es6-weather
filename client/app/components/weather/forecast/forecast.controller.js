class ForecastController {
  constructor(OpenWeather, Forecasts) {
    'ngInject';
    let vm = this;
    vm.name = 'forecast';

    Forecasts.refresh = (zipCode) => {
      OpenWeather.getForeCast(zipCode).then(function (forecast) {
        vm.forecast = forecast;
      });
    }

    Forecasts.clear = () => {
      vm.forecast = null;
    }
  }
}

export default ForecastController;
