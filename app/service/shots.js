Rex('app.service.shots', [
  
    'format'
  , 'or'
  , 'http'

], function (format, or, http) {
  
  /**
   * Servico API do Dribbble para busca das ultimas 96 imagens mais acessadas, o numero
   * maximo de 96 imagens leva em consideracao os multiplo de 1, 2, 3 e 4 para que
   * o layout nao fique quebrado nos diferentes dispositivos
   * 
   * @service shots
   * @param {Number} id Valor opcional, quando passad o identificador o servico retorna o elemento espedificado
   * @return {Function} Funcao promisse para passagem da funcao callback
   * @example
   * 
   *    shots()(function (data) {
   *      // neste caso o serviço retorna uma colecao de itens
   *    });
   * 
   *    shots(3681685)(function (data) {
   *      // neste caso o serviço retorna o item especificado
   *    });
   * 
   */
  return function (id, callback) {
    
    http(
        'GET'
      , format('https://api.dribbble.com/v1/shots/{0}?page={1}&per_page={2}', [or(id, ''), 1, 24])
    )
    (200, function (data) {
      callback(data);
    });
    
    /**
     * Revelation pattern para entrega da promisse para registro da
     * funcao callback
     */
    return function (a) {
      callback = a;
    };
    
  };
  
});