Rex('app.widget.shot', [

    'add'
  , 'get'
  , 'h'
  , 'route.pushState'
  , 'app.widget.legend'

], function (add, get, h, pushState, legend) {
  
  /**
   * Widget responsavel pela renderizacao do shot, que é a imagem
   * com a legenda
   * 
   * @module shot
   * @param {Object} shot Dados que shot, como imagem, titulo e count view
   * @param {Number} index Index que é passado pela funcao map, mas neste caso nao esta sendo utilizado
   * @param {Object} data Todos os daos da colection
   * @return {vDOM} Virtual DOM para renderizacao do html
   * @example
   * 
   *    shot({}, 0, {});
   * 
   */
  return function (shot, index, data) {
    
    /**
     * Funcao que é executado quando a imagem entra em visualizacao, atribui a url
     * da imagem, que foi fornecido pela API, para a propriedade src
     * 
     * @method load
     * @param {Element} element Elemento image
     * @example
     *
     *    load({}};
     * 
     */
    function load(element) {
      element.src = get(shot.images, 'normal', '');
    }
    
    /**
     * Funcao reponsavel pelo redirecionamento para a view de detalhes de uma
     * imagem especifica
     * 
     * @method redirect
     * @example
     * 
     *      redirect();
     * 
     */
    function redirect() {
      pushState({ data: data, shot: shot }, null, add('/details/', get(shot, 'id', 0)));
    }
    
    /**
     * Revelation pattern, que retorn o vDOM do shot, que pode ser utilizado na
     * listagem de imagens ou na view de detalhes
     */
    return h('li.shot', { onclick: redirect }, [
      h('figure', [
          h('img.shot_image', { inView: load })
        , legend(shot)
      ])
    ]);
    
  };
  
});