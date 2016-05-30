Rex('app.widget.back', [

    'h'
  , 'app.service.back'

], function (h, back) {
  
  /**
   * Widget responsavel pelo botao que ira retonar o usuario, para a
   * tela de listagem de imagens
   * 
   * @module back
   * @return {vDOM} Virtual DOM para renderizacao do html
   * @example
   * 
   *    back();
   * 
   */
  return function () {
    return h('li.description_back', [
      h('img.description_icon', { src: '../content/img/back.svg', onclick: back })
    ]);
  };
  
});