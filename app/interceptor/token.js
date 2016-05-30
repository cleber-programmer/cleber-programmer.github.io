Rex('app.interceptor.token', ['add'], function (add) {
  
  return {
    
    /**
     * Interceptor responsavel pela OAuth da API do Dribbble, para cada
     * requisicao feita, sera adiciona no cabecalho a key 'Authorization' e
     * value 'Bearer TOKEN'
     * 
     * @method request
     * @param {String} method Metodo da requisicao XMLHttpRequest
     * @param {String} url Endereco do API
     * @param {Object} data Objeto literal que sera passado no corpo da requisicao
     * @param {XMLHttpReques} xhr Objeto de requisicao que foi aberto, para o metodo e url correspondente
     * @return {Object} Objeto que sera passado no corpo da requisicao, para outro interceptor interagirem
     */
    request: function (method, url, data, xhr) {
      return xhr.setRequestHeader('Authorization', add('Bearer ', '363102d7f9470edb0ef1464915fb8c3c92519756164ed476b2a560cbf85df48a')), data;
    }
    
  };
  
});