Rex('app.widget.user', [

    'get'
  , 'h'
    
], function (get, h) {
  
  /**
   * Widget responsavel pela renderizacao do usuario nos detalhe da imagem
   * 
   * @module user
   * @param {Object} data Objeto com os detalhes da imagem, como avatar_url e name
   * @return {vDOM} Virtual DOM para renderizacao do html
   * @example
   * 
   *    user({});
   * 
   */
  return function (data) {
    return h('li.description_user', [
        h('img.description_avatar', { src: get(data.user, 'avatar_url', '') })
      , h('span.description_name', get(data.user, 'name', ''))
    ]);
  };
  
});