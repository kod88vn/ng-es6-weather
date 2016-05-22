import angular from 'angular';
import Weather from './weather/weather';

let componentModule = angular.module('app.components', [
  Weather.name
]);

export default componentModule;
