Rex('app.service.shots', [
  
    'format'
  , 'or'
  , 'http'

], function (format, or, http) {
  
  return function (id, callback) {
    
    http(
        'GET'
      , format('https://api.dribbble.com/v1/shots/{0}?page={1}&per_page={2}', [or(id, ''), 1, 96])
    )
    (200, function (data) {
      callback(data);
    });
    
    return function (a) {
      callback = a;
    };
    
  };
  
});