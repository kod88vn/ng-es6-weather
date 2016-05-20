import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';
import Forecast from './forecast/forecast';

let weatherModule = angular.module('weather', [
  uiRouter,
  Forecast.name
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('weather', {
      url: '/',
      views: {
        'content': {
          template: '<weather/>'
        },
        'forecast@weather': {
          template: '<forecast data-config="vm.forecastConfig"/>'
        }
      }
    });
})

.component('weather', weatherComponent);

export default weatherModule;
