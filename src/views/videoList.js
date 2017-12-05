var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    let videoList = this.collection.map(this.renderVideo, this);
    this.$('.video-list').append(videoList);
    return this;
  },
  
  renderVideo: function(video) {
    return new VideoListEntryView({model: video}).render();
  },

  template: templateURL('src/templates/videoList.html')

});
