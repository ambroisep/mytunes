var Playlist = Songs.extend({

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