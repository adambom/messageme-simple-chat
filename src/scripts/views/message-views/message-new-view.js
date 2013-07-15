(function (App, Backbone, _, $, undefined) {

	var __super__ = App.views.messageViews.AbstractMessageView.prototype;

	App.views.messageViews.MessageNew = App.views.messageViews.AbstractMessageView.extend({

		className: 'message messageNew',

		template: App.tmpl.message.messageNew

	});

}(window.SC, window.Backbone, window._, window.jQuery));