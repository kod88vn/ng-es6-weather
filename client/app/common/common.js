import angular from 'angular';
import Navbar from './navbar/navbar';
import OpenWeather from './open_weather/openWeather';

let commonModule = angular.module('app.common', [
  Navbar.name,
  OpenWeather.name
]);

export default commonModule;
