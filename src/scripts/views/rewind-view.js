(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.Rewind = Backbone.View.extend({

		template: App.tmpl.rewind,

		initialize: function () {
			this.listenTo(this.model, 'change:totalMessages', this.render);
		},

		render: function () {
			var that = this;

			this.$el.html(this.template(this.model.toJSON()));

			this.$('.slider').slider({
				max: this.model.get('totalMessages'),
				value: Math.min(this.model.get('totalMessages'), this.model.get('shownMessageLimit')),
				formater: function (value) {
					var msg = that.model.get('messages')[value - 1];

					if (!msg) return value || 'Start';

					var view = App.factories.messageFactory(msg.cmd, msg.payload);

					return view && view.render().$el.text() || value;
				}
			})
			.on('slide', _.bind(this.onSlide, this));
		},

		onSlide: _.throttle(function (e) {
			var limit = e.value;

			this.model.set('rewinding', limit !== this.model.get('totalMessages'));
			this.model.set('shownMessageLimit', limit);
		}, 120)


	});

}(window.SC, window.Backbone, window._, window.jQuery));