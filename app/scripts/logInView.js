"use strict";

var LoginInView = Parse.View.extend({
	
	// template: _.template($('.').text()),

	events: {

	},

	initialize: function() {
		$('.container').append(this.el)
		this.render();
	},

	render: function() {

	},


})