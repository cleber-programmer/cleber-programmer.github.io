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
  
  return function (state) {
    
    function init(data) {
      render(data), setTimeout(lazy, 250);
    }
    
    function lazy() {
      forEach(slice(document.querySelectorAll('img.shot_image')), echo.push), echo();
    }
    
    function render(data) {
      reflow($('main'), h('main', [h('ul.listing', map(data, shot))]));
    }
    
    or(state, {}).data ? init(state.data) : service()(init);
    
  };
  
});