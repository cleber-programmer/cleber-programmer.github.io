Rex('app.view.listing', [
  
    '$'
  , 'map'
  , 'h'
  , 'h.reflow'
  , 'app.service.shots'
  , 'app.widget.shot'
  
], function ($, map, h, reflow, service, shot) {
  
  return function () {
    
    function render(data) {
      reflow($('main'), h('main', [h('ul.listing', map(data, shot))]));
    }
    
    service()(render);
    
  };
  
});