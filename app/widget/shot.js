Rex('app.widget.shot', [

    'add'
  , 'get'
  , 'partial'
  , 'h'
  , 'route.pushState'

], function (add, get, partial, h, pushState) {
  
  return function (shot, index, data) {
    return h('li.shot', { onclick: partial(pushState, [{ data: data, shot: shot }, null, add('/details/', get(shot, 'id', 0))]) }, [
      h('figure', [
          h('img.shot_image', { inView: function (e) { e.src = get(shot.images, 'normal', ''); } })
        , h('figcaption.shot_legend', [
            h('ul', [
                h('li.shot_title', get(shot, 'title', ''))
              , h('li.shot_views', get(shot, 'views_count', '0'))
            ])
          ])
      ])
    ]);
    
  };
  
});