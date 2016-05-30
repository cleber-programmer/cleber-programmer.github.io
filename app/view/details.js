Rex('app.view.details', [
  
    '$'
  , 'or'
  , 'h'
  , 'h.reflow'
  , 'app.service.echo'
  , 'app.service.shots'
  , 'app.widget.back'
  , 'app.widget.shot'
  , 'app.widget.text'
  , 'app.widget.user'
  
], function ($, or, h, reflow, echo, service, back, shot, text, user) {
  
  /**
   * View responsavel pela inicializacao da pagina de detalhes
   * da imagem selecionado
   * 
   * @module details
   * @param {Object} state Estado da rota, este estado é setado pelo pushState
   * @param {Object} param Parametros que foram identificados na url
   */
  return function (state, param) {
    
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
      render(data), echo();
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
      reflow($('main'), h('main', [
        h('ul.description', [back(), shot(data), user(data), text(data)])
      ]));
    }
    
    /**
     * Caso o estado da pagina fora setado em um processo anterior, nao
     * sera feito uma requisicao ao servico para buscar os dados
     * da imagem especificado
     */
    or(state, {}).shot ? init(state.shot) : service(param.id)(init);
    
  };
  
});