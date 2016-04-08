import angular from 'angular';
import ForecastsFactory from './forecasts.factory';

let forecastsModule = angular.module('forecasts', [])

.factory('Forecasts', ForecastsFactory);

export default forecastsModule;
