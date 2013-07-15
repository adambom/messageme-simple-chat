(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.Router.prototype;

	App.routers.Main = Backbone.Router.extend({

		routes: {
			'': 'index',
			'login': 'login',
			'chat': 'chat'
		},

		initialize: function () {
			this.$el = $('#main');
		},

		index: function () {
			if (App.user) {
				this.navigate('chat');
			} else {
				this.navigate('login', { trigger: true });
			}
		},

		login: function () {
			this.view = new App.views.Login({
				el: this.$el,
				model: App.roomModel || new Backbone.Model()
			});

			if (this.rewindView) {
				this.rewindView.$el.empty();
				delete this.rewindView;
			}

			this.view.render();
		},

		chat: function () {
			if (!App.user) {
				return this.navigate('login', { trigger: true });
			}

			App.roomModel = new App.models.Room({
				user: App.user
			}, {
				url: 'ws://107.22.74.86:7061/simplechat/websocket'
			});

			this.view = new App.views.Room({
				model: App.roomModel,
				el: this.$el
			});

			this.rewindView = new App.views.Rewind({
				model: App.roomModel,
				el: $('.dropdown')
			});

			this.view.render();

			this.rewindView.render();
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));