(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.UsersList = Backbone.View.extend({

		template: App.tmpl.usersList,

		userTemplate: App.tmpl.user,

		initialize: function () {
			this.listenTo(this.model, 'change:users', this.render);
		},

		render: function () {
			this.$el.html(this.template({}));

			var users = this.model.get('users');

			if (!users.length) return;

			var that = this;

			this.$el.find('.users').html(users.reduce(function (htmlStr, user) {
				return htmlStr + that.userTemplate(user);
			}, ''));
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));