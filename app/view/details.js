Rex('app.view.details', [
  
    '$'
  , 'get'
  , 'or'
  , 'replace'
  , 'h'
  , 'h.reflow'
  , 'route.pushState'
  , 'app.service.echo'
  , 'app.service.shots'
  , 'app.widget.shot'
  
], function ($, get, or, replace, h, reflow, pushState, echo, service, shot) {
  
  return function (state, param) {
    
    function init(data) {
      render(data), echo();
    }
    
    function render(data) {
      reflow($('main'), h('main', [
        h('ul.description', [
          , h('li.description_back', [
              h('img.description_icon', {
                  src: '../content/img/back.svg'
                , onclick: function (evetn) {
                    event.stopPropagation(), pushState(state, null, '/');
                  }
              })
            ])
          , shot(data)
          , h('li.description_user', [
                h('img.description_avatar', { src: get(data.user, 'avatar_url', '') })
              , h('span.description_name', get(data.user, 'name', ''))
            ])
          , h('li.description_text', replace(get(data, 'description', ''), /<[^>]+>/gm, ''))
        ])
      ]));
    }
    
    or(state, {}).shot ? init(state.shot) : service(param.id)(init);
    
  };
  
});