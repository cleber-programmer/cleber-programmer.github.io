Rex('app.widget.text', [

    'get'
  , 'replace'
  , 'h'
    
], function (get, replace, h) {
  
  /**
   * Widget responsavel pela renderizacao do text de descricao da imagem
   * 
   * @module text
   * @param {Object} data Objeto com as props da imagem, compo por exemplo key description
   * @return {vDOM} Virtual DOM para renderizacao do html
   * @example
   * 
   *    text({});
   * 
   */
  return function (data) {
    return h('li.description_text', replace(get(data, 'description', ''), /<[^>]+>/gm, ''));
  };
  
});