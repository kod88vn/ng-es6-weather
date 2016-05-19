class ForecastController {
  constructor(OpenWeather) {
    'ngInject';
    var vm = this;
    vm.name = 'forecast';

    let clear = () => {
      vm.forecast = null;
    }

    let refresh = () => {
      OpenWeather.getForeCast().then(function (forecast) {
        if(forecast.cod == 404) {
          console.error('zipcode not found');
          return;
        }
        
        vm.forecast = forecast;
        vm.forecast.list.forEach((fc) => {
          fc.dtDisplay = new Date(fc.dt * 1000).toDateString();
        });
      });
    }

    vm.config.actions.refresh = refresh;
    vm.config.actions.clear = clear;
  }
}

export default ForecastController;
