import angular from 'angular';
import OpenWeatherFactory from './openWeather.factory';

let openWeatherModule = angular.module('openWeather', [])

.factory('OpenWeatherDa', OpenWeatherFactory);

export default openWeatherModule;
