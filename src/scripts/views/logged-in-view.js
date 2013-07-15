(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.LoggedIn = Backbone.View.extend({

		events: {
			'click .logout': 'logout'
		},

		template: App.tmpl.loggedIn,

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
		},

		logout: function () {
			this.model.close();
			App.router.navigate('login', { trigger: true });
		}
	});

}(window.SC, window.Backbone, window._, window.jQuery));