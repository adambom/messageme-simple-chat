(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.Rewind = Backbone.View.extend({

		template: App.tmpl.rewind,

		initialize: function () {
			this.listenTo(this.model, 'change:totalMessages', this.render);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));

			this.$('.slider').slider({
				max: this.model.get('totalMessages'),
				value: Math.min(this.model.get('totalMessages'), this.model.get('shownMessageLimit'))
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