"use strict";

var ContactView = Parse.View.extend({
	
	template: _.template($('.contact-view').text()),

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