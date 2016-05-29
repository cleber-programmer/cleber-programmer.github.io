Rex('app.view.details', [
  
    '$'
  , 'get'
  , 'replace'
  , 'h'
  , 'h.reflow'
  , 'app.service.shots'
  , 'app.widget.shot'
  
], function ($, get, replace, h, reflow, service, shot) {
  
  return function (state, param) {
    
    function render(data) {
      reflow($('main'), h('main', [
        h('ul.description', [
          , h('li.description_back', [
              h('img.description_icon', {
                  src: '../content/img/back.svg'
                , onclick: window.history.back.bind(window.history)
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
    
    service(param.id)(render);
    
  };
  
});