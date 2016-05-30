Rex('app.service.back', [
  
    'h'
  , 'route.pushState'

], function (h, pushState) {
  
  /**
   * Servico responsavel por redirecionar o app, para a rota raiz
   * 
   * @servie back
   * @example
   * 
   *    back();
   * 
   */
  return function () {
    event.stopPropagation(), pushState(window.history.state, null, '/');
  };
  
});