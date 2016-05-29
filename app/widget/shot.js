Rex('app.widget.shot', [

    'add'
  , 'get'
  , 'partial'
  , 'h'
  , 'route.pushState'

], function (add, get, partial, h, pushState) {
  
  return function (data) {
    return h('li.shot', { onclick: partial(pushState, [data, null, add('/details/', get(data, 'id', 0))]) }, [
      h('figure', [
          h('img.shot_image', { src: get(data.images, 'normal', '') })
        , h('figcaption.shot_legend', [
            h('ul', [
                h('li.shot_title', get(data, 'title', ''))
              , h('li.shot_views', get(data, 'views_count', '0'))
            ])
          ])
      ])
    ]);
    
  };
  
});