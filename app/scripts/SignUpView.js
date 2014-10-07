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
		user.set("username", $('.username').val())
		user.set("password", $('.password').val())

		user.signUp(null, {
			success: function(user) {
				var currentUser = Parse.User.current();
				if (currentUser) {
					router.navigate('home', {trigger: true});
					console.log(currentUser)
				} else {
					console.log("did not sign up")
				}
			},
			error: function(user, error) {
				alert("Error" + error.code + " " + error.message);
			}	
		})
	},
})