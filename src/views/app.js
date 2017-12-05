var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // let videoList = [];
    // for (let value of window.exampleVideoData) {
    //   videoList.push(new Video(value));
    // } 
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
  },


  render: function() {
    new VideoListView({collection: this.videos}).render();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});