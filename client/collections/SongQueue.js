// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function() {
    // this.on('enqueue', function() {
    this.on('dequeue', function(song) {
      if(this.indexOf(song) === 0) {
        song.pause();
        song.ended();
      } else {
        this.remove(song);
      }
    });
    this.on('ended', function() {
      this.shift();
      if(this.size() > 0) {
        this.playFirst();
      }
    });
    this.on('add', function() {
      this.playIfOnlySongInQueue();
    }, this);
  },
  playFirst: function() {
      this.at(0).play();
  },
  playIfOnlySongInQueue: function() {
    if (this.size() === 1) {
      this.playFirst();
    }
  // },
  // enqueue: function(song) {
  //   this.push(song);
  }
});