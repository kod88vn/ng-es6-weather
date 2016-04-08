let ForecastsFactory = function (OpenWeather) {
  'ngInject';

  let refresh = () => {
    // to be overwritten
  };

  let clear = () => {
    // to be overwritten
  }

  return { 
    refresh,
    clear
  };
};

export default ForecastsFactory;
