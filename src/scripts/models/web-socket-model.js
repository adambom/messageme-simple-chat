(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.Calculated.Model.prototype;

	var eventTriggerFactory = function (msg, data) {
		this.trigger(msg, data);
		return data;
	};

	var noop = function () {};

	var events = ['open', 'close', 'message', 'error'];

	App.models.WebSocketModel = Backbone.Calculated.Model.extend({

		initialize: function (attrs, options) {
			this.url = options.url || 'ws://';
			this.socket = new WebSocket(this.url);

			if (!attrs.messages) this.set('messages', [], { silent: true });

			// Convert socket events into backbone events
			// for easy app-wide pubsub
			_.each(events, function (event) {
				var onEvent = 'on' + event;

				this.socket[onEvent] = _.compose(
					// Allow for a user-defined on-x event
					// that receives event data
					options[onEvent] && _.bind(options[onEvent], this) || noop,

					// trigger an event on the model when socket
					// event fires
					_.bind(eventTriggerFactory, this, event)
				);
			}, this);

			// Self-subscribe to the generated events
			this.on('open', _.partial(this.setReadyStatus, true));
			this.on('close', _.partial(this.setReadyStatus, false));

			this.on('message', this.storeMessage);

			__super__.initialize.call(this, attrs, options);
		},

		setReadyStatus: function (ready) {
			this.ready = ready;
		},

		send: function (msg, store) {
			if (!this.ready) return setTimeout(_.bind(this.send, this, msg, store), 10);

			msg = _.isObject(msg) ? JSON.stringify(msg) : msg;

			this.socket.send(msg);

			if (!(store === false)) {
				this.storeMessage({ data: msg });
			}
		},

		storeMessage: function (e) {
			// Clone the messages object to avoid
			// pass by reference issues
			var messages = _.clone(this.get('messages'));

			messages.push(JSON.parse(e.data));

			this.set('messages', messages);
		},

		close: function () {
			if (!this.ready) return setTimeout(this.close, 10);

			this.socket.close();
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));