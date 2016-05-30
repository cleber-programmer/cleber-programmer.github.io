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
  
  /**
   * Inclusao dos interceptor, para manipulacao das chamadas XMLHttpRequest como
   * a inclusao do token no cabecalho e parse de string para json
   */
  push(handler, token);
  push(handler, parse);
  
  /**
   * Assinatura da rotas de listagem e de detalhes da imagem
   */
  route('/', listing);
  route('/details/:id', details);
  
  /**
   * Start da rota, assim que a pagina e carregada ou quando o usuario
   * solicita o reflow na tela
   */
  init();
  
});