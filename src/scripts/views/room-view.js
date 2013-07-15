(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.Room = Backbone.View.extend({

		template: App.tmpl.room,

		render: function () {
			this.$el.html(this.template({}));

			this.chatWindow = new App.views.ChatWindow({
				model: this.model,
				el: this.$('.chat')
			});

			this.chatWindow.render();

			this.userManagementView = new App.views.UserManagement({
				model: this.model,
				el: this.$('.user-management')
			});

			this.userManagementView.render();

			this.rewindView = new App.views.Rewind({
				model: this.model,
				el: $('.dropdown .content')
			});

			this.rewindView.render();
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));