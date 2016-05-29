Rex([

    'push'
  , 'http.handler'
  , 'http.parse'
  , 'route'
  , 'route.init'
  , 'app.interceptor.token'
  , 'app.view.details'
  , 'app.view.listing'

], function (push, handler, parse, route, init, token, details, listing) {
  
  push(handler, token);
  push(handler, parse);
  
  route('/', listing);
  route('/details/:id', details);
  
  init();
  
});