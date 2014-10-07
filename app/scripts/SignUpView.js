"use strict";

var SignUpView = Parse.View.extend({
	
	template: _.template($('.sign-up-view').text()),

	events: {
		"click .create-user" : "createUser",
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

	createUser: function() {
		var user = new Parse.User();
		user.set("username", $('.username').val());
		user.set("password", $('.password').val());
	},
})