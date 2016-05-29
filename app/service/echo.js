Rex('app.service.echo', [

    'cond'
  , 'forEach'
  , 'partial'
  , 'push'
  , 't'

], function (cond, forEach, partial, push, t) {

  var handlers = [];

  function echo() {
    forEach(handlers, scan());
  }

  function inView(element) {
    (element.inView || stub)(element);
  }

  function outView(element) {
    (element.outView || stub)(element);
  }

  function scan() {
    return cond([
      [scrolledIntoView, inView],
      [t, outView]
    ]);
  }

  function scrolledIntoView(element) {
    return compare(element.getBoundingClientRect ? element.getBoundingClientRect() : {});
  }

  function compare(rect) {
    return (rect.top <= document.documentElement.clientHeight);
  }

  function stub() {

  }

  window.addEventListener('scroll', echo, false);

  return Object.defineProperty(echo, 'push', { value: partial(push, [handlers]) });

});