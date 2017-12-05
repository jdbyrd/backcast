var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    //this.render();
    this.model.on('change', this.render, this);
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes.snippet));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html'),
  
  events: {
    'click .video-list-entry-title': 'select'
  },
  
  select: function() {
    this.model.on('select', this.model.select);
  }
  
  
});
