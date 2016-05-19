let OpenWeatherFactory = function ($http, $q) {
  'ngInject';

  const apiKey = '651d7399f1db9446bc4a25062ab5a2a5';

  let getForeCast = () => {
    let url = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    let deferred = $q.defer();

    let data = {
      zip: this.zipCode + ',us',
      APPID: apiKey,
      cnt: 5
    };

    httpGet(deferred, url, data);

    return deferred.promise;
  };

  let setZipCode = (zipCode) => {
    this.zipCode = zipCode;
  }

  let httpGet = (deferred, url, data) => {
    $http({
      method: 'GET',
      url: url,
      params: data
    })
    .success(function(data, status, headers, config) {
      deferred.resolve(data);
    })
    .error(function(data, status, headers, config) {
      deferred.reject(null);
    });
  }

  return { 
    getForeCast, 
    setZipCode 
  };
};

export default OpenWeatherFactory;
