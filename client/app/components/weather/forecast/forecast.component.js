import template from './forecast.pug';
import controller from './forecast.controller';
import './forecast.styl';

let forecastComponent = {
  restrict: 'E',
  bindings: {
  	config: '='
  },
  template,
  controller,
  controllerAs: 'fc'
};

export default forecastComponent;
