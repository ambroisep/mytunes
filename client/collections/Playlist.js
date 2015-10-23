var Playlist = Songs.extend({

  url: '/playlist',
  localStorage: true,

  initialize: function() {
    // debugger;
    this.on('removeFromPlaylist', function(song) {
      this.remove(song);
    });
  },

  play: function() {
    this.trigger('playMe', this);
  }
});