// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function() {
    // this.on('enqueue', function() {
    this.on('dequeue', function(song) {
      this.remove(song);
    });
    this.on('ended', function() {
      this.shift();
      this.models[0].play();
    });
  },
  enqueue: function(song) {
    this.push(song);
  }

});