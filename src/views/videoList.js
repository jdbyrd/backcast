var VideoListView = Backbone.View.extend({

  initialize: function() {
    //console.log('videlistview ran');
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    console.log(this.collection);
    this.$el.children().detach();
    this.$el.html(this.template(this.collection.model));
    this.collection.forEach(this.renderVideo, this);
    return this.$el;
  },
  
  renderVideo: function(video) {
    var videoListView = new VideoListEntryView({model: video});
    this.$el.append(videoListView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
