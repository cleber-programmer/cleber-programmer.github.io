Rex('app.widget.legend', [

    'get'
  , 'h'
    
], function (get, h) {
  
  /**
   * Widget responsavel pela montagem da legenda da imagem
   * 
   * @module legend
   * @param {Object} data Dados da imagem, como titulo e view count
   * @return {vDOM} Virtual DOM para renderizacao do html
   * @example
   * 
   *    legend({});
   * 
   */
  return function (data) {
    return h('figcaption.shot_legend', [
      h('ul', [
          h('li.shot_title', get(data, 'title', ''))
        , h('li.shot_views', get(data, 'views_count', '0'))
      ])
    ]);
  };
  
});