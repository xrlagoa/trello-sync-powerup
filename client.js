var t = TrelloPowerUp.iframe();

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Activar Sincronización',
      callback: function(t) {
        return t.popup({
          title: 'Sincronización',
          url: 'index.html'
        });
      }
    }];
  }
});

