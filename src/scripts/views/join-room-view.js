(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.JoinRoom = Backbone.View.extend({

		events: {
			'click .join': 'join'
		},

		template: App.tmpl.loggedIn,

		loggedInTemplate: App.tmpl.loggedIn,

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
		}
	});

}(window.SC, window.Backbone, window._, window.jQuery));