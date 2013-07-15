(function (App, Backbone, _, $, undefined) {

	var __super__ = App.models.WebSocketModel.prototype;

	App.models.Room = App.models.WebSocketModel.extend({

		defaults: {
			shownMessageLimit: Infinity,

			rewinding: false
		},

		calculated: {
			userNames: {
				dependencies: 'users',
				getter: function () {
					return _.pluck(this.get('users'), 'name');
				}
			},

			users: {
				dependencies: ['messages', 'shownMessageLimit'],
				getter: function () {
					var messages = this.get('messages');

					// Get initial room members
					var room = _.find(messages, function (msg) {
						return msg.cmd === 'user_login' && msg.payload.room;
					});

					if (!room) return [];

					messages = _.first(messages, this.get('shownMessageLimit'));

					room = _.sortBy(room.payload.room, function (user) {
						return user.user_id;
					});

					// Find any room joins or leaves in order
					_.each(messages, function (msg) {

						if (msg.cmd === 'room_leave') {
							room.splice(_.indexOf(room, msg.payload.user), 1);
						}

						if (msg.cmd === 'room_join') {
							room.push(msg.payload.user);
						}

					});

					return room;
				}
			},

			totalMessages: {
				dependencies: 'messages',
				getter: function () {
					return this.get('messages').length;
				}
			},

			// Messages that can be shown given the user's limit
			visibleMessages: {
				dependencies: ['messages', 'shownMessageLimit'],
				getter: function () {
					var messages = this.get('messages');
					var limit = this.get('shownMessageLimit');

					return messages.slice(0, limit);
				}
			},

			totalVisibleMessages: {
				dependencies: 'visibleMessages',
				getter: function () {
					return this.get('visibleMessages').length;
				}
			}
		},

		initialize: function () {
			this.on('change:messages', function () {
				if (!this.get('rewinding')) {
					this.set('shownMessageLimit', this.get('totalMessages'));
				}
			});

			this.join(this.get('user'));

			__super__.initialize.apply(this, arguments);
		},

		join: function (name) {
			this.send({
				cmd: 'user_login',
				payload: {
					name: name
				}
			}, false);
		},

		sendMessage: function (msg) {
			this.send({
				cmd: 'message_new',
				payload: {
					body: msg
				}
			});
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));