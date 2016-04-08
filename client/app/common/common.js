import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import OpenWeather from './open_weather/openWeather';
import Forecasts from './forecasts/forecasts';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  OpenWeather.name,
  Forecasts.name
]);

export default commonModule;
