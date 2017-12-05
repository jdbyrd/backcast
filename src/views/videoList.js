var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    let videoList = this.collection.map(this.renderVideo, this);
    this.$el.html(this.template());
    this.$('.video-list').append(videoList);
    return this.$el;
  },
  
  renderVideo: function(video) {
    var videoListView = new VideoListEntryView({model: video}).render();
    return videoListView;
  },

  template: templateURL('src/templates/videoList.html')

});
