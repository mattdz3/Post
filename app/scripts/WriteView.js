"use strict";

var WriteView = Parse.View.extend({
	
	template: _.template($('.write-view').text()),

	events: {

	},

	initialize: function() {
		$('.view-container').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemp = this.template(this.model)
		this.$el.html(renderTemp);
		return this;
	},
})