(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.UserManagement = Backbone.View.extend({

		template: App.tmpl.userManagement,

		render: function () {
			this.$el.html(this.template({}));

			this.usersListView = new App.views.UsersList({
				model: this.model,
				el: this.$el.find('.users-list')
			});

			this.usersListView.render();

			this.joinRoomView = new App.views.JoinRoom({
				model: this.model,
				el: this.$el.find('.join-room')
			});

			this.joinRoomView.render();
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));