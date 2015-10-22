var PlaylistEntryView = Backbone.View.extend({

  tagName: "tr",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button>Remove from Playlist</button></td>'),

  events: {
    'click button': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});