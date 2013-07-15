(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.Login = Backbone.View.extend({

		events: {
			'submit form': 'login'
		},

		template: App.tmpl.login,

		render: function () {
			this.$el.html(this.template({}));
		},

		login: function (e) {
			e.preventDefault();

			var username = this.$('.username').val();
			var remember = this.$('.remember').is(':checked');

			if (remember) {
				localStorage.setItem('username', username);
			}

			localStorage.setItem('remember', remember);

			App.user = username;

			App.router.navigate('chat', { trigger: true });
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));