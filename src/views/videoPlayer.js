var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.selectVideo(this.collection.at(0));
  },

  selectVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {

    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  // render: function() {
  //   if (this.model) {
  //     this.$el.html(this.template(this.model.attributes));
  //   } else {
  //     this.$el.html('div class=""');
  //   }
  //   return this;
  // },
 
  template: templateURL('src/templates/videoPlayer.html')

});
