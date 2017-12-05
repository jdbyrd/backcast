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
    let list = new VideoListView({collection: this.videos});
    this.$el.html(this.template());
    this.$el.append(list.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});