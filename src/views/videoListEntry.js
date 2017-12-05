var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    //this.render();
    //this.model.on('change', this.render, this);
    //this.func = () => console.log('this works');
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes.snippet));
    return this.el;
  },

  template: templateURL('src/templates/videoListEntry.html'),
  
  events: {
    'click .video-list-entry-title': 'onClick'
  },
  
  onClick: function() {
    this.model.select();
  },
  
  //changeVideo: function() {
  //AppView.testProp = false;
  //console.log(window.AppView);
  //}
  
  
});
