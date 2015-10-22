var Playlist = Songs.extend({

  initialize: function() {
    // debugger;
    this.on('removeFromPlaylist', function(song) {
      console.log('hi');

      this.remove(song);
    });
  }
});