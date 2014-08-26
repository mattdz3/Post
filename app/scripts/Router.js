"use strict";

var AppRouter = Parse.Router.extend({
	
	// template: _.template($('.').text()),

	routes: {
		"" : "welcome",
		"welcome" : "welcome",
		"*actions" : "default",

	},

	initialize: function(options) {
		this.currentView = null;
	},

	welcome: function() {
		var view = new WelcomeView();
		this.swap(view);
	},

	default: function() {
		var view = new HomeView();
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