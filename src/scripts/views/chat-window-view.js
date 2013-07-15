(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.ChatWindow = Backbone.View.extend({

		template: App.tmpl.chatWindow,

		emptyRoomTmpl: App.tmpl.emptyRoom,

		initialize: function () {
			this.listenTo(this.model, 'change:visibleMessages', this.renderMessages);
		},

		render: function () {
			this.$el.html(this.template({}));

			this.inputArea = new App.views.InputArea({
				model: this.model,
				el: this.$('.input-area')
			});

			this.inputArea.render();

			this.renderMessages();
		},

		renderMessages: function () {
			var $chat = this.$el.find('.chat-window').empty();

			if (!this.model.get('visibleMessages').length) {
				$chat.html(this.emptyRoomTmpl({}));
			}

			_.each(this.model.get('visibleMessages'), function (message) {
				// Construct a message view/model pair
				// based on message type
				var view = App.factories.messageFactory(message.cmd, message.payload);

				if (view && view.render().$el.html()) {
					$chat.append(view.$el);
				}

			}, this);

			$chat.scrollTop($chat[0].scrollHeight);
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));