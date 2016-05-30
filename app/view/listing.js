Rex('app.view.listing', [
  
    '$'
  , 'forEach'
  , 'map'
  , 'or'
  , 'slice'
  , 'h'
  , 'h.reflow'
  , 'app.service.echo'
  , 'app.service.shots'
  , 'app.widget.shot'
  
], function ($, forEach, map, or, slice, h, reflow, echo, service, shot) {
  
  /**
   * View responsavel pela inicializacao da pagina de listagem de imagens
   * 
   * @module listing
   * @param {Object} state Estado da rota, este estado é setado pelo pushState
   */
  return function (state) {
    
    /**
     * Inicializa a renderizacao da pagina do DOM e inicializa o carregamento
     * das imagens que estao visiveis na pagina
     * 
     * @method init
     * @param {Object} data Dados que serma passado para o methodo render
     * @example
     * 
     *    init({});
     * 
     */
    function init(data) {
      render(data), setTimeout(lazy, 250);
    }
    
    /**
     * Busca no DOM todas as imagens que seram vinculados no processo do modulo
     * echo, responsavel pelo carregamento assincrono das imagens
     * 
     * @method lazy
     * @example
     * 
     *    lazy();
     * 
     */
    function lazy() {
      forEach(slice(document.querySelectorAll('img.shot_image')), echo.push), echo();
    }
    
    /**
     * Renderizacao da pagina (vDOM), com os dados servido do servico ou
     * do estado
     * 
     * @method render
     * @param {Object} data Objeto que fora servido pelo servico ou stado da pagina
     * @example
     * 
     *    render({});
     * 
     */
    function render(data) {
      reflow($('main'), h('main', [h('ul.listing', map(data, shot))]));
    }
    
    /**
     * Caso o estado da pagina fora setado em um processo anterior, nao
     * sera feito uma requisicao ao servico para buscar a colecao de imagens
     */
    or(state, {}).data ? init(state.data) : service()(init);
    
  };
  
});