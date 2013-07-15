(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.messageViews.AbstractMessageView = Backbone.View.extend({

		tagName: 'div',

		className: 'message',

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));