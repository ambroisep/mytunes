var PlaylistView = Backbone.View.extend({ 

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  events: {
    'click .ListenToPlaylist': function() {
      this.collection.play();
    }
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th><td>Playlist</td><td><button class=ListenToPlaylist>Listen to this playlist</button></td></th>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});