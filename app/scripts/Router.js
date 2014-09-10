"use strict";

var AppRouter = Parse.Router.extend({

	routes: {
		""         : "welcome",
		"welcome"  : "welcome",
		"write"    : "write",
		"done"     : "done",
		"signup"   : "signup",
		"login"    : "login",
		"about"    : "about",
		"contact"  : "contact",
 		"*actions" : "default",
	},

	initialize: function(options) {
		this.currentView = null;
	},

	welcome: function() {
		$('.view-container').empty();
		var view = new WelcomeView();
		this.swap(view);
	},

	signup: function() {
		$('.view-container').empty();
		var view = new SignUpView();
		this.swap(view);
	},

	login: function() {
		$('.view-container').empty();
		var view = new LoginView();
		this.swap(view);
	},

	about: function() {
		$('.view-container').empty();
		var view = new AboutView();
		this.swap(view);
	},

	contact: function() {
		$('.view-container').empty();
		var view = new ContactView();
		this.swap(view);
	},

	write: function() {
		$('.view-container').empty();
		var view = new WriteView();
		this.swap(view);
	},

	done: function() {
		$('.view-container').empty();
		var view = new DoneView();
		this.swap(view);
	},

	default: function() {
		var view = new WelcomeView();
		this.swap(view);
	},

	swap: function(view) {
		if (this.currentView) this.currentView.remove();
		this.currentView = view;
		this.currentView.render();
	},
})

var router = new AppRouter();
Parse.history.start();