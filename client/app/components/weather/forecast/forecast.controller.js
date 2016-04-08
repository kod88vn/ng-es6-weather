class ForecastController {
  constructor(OpenWeather, Forecasts) {
    'ngInject';
    let vm = this;
    vm.name = 'forecast';

    Forecasts.refresh = () => {
      OpenWeather.getForeCast().then(function (forecast) {
        vm.forecast = forecast;
        vm.forecast.list.forEach((fc) => {
          fc.dtDisplay = new Date(fc.dt * 1000).toDateString();
        });
      });
    }

    Forecasts.clear = () => {
      vm.forecast = null;
    }
  }
}

export default ForecastController;
