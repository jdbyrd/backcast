var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },


  render: function() {
    //console.log('render ran');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
