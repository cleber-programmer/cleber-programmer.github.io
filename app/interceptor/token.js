Rex('app.interceptor.token', ['add'], function (add) {
  
  return {
    request: function (method, url, data, xhr) {
      return xhr.setRequestHeader('Authorization', add('Bearer ', '363102d7f9470edb0ef1464915fb8c3c92519756164ed476b2a560cbf85df48a')), data;
    }
  };
  
});