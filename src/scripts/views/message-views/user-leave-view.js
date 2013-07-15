(function (App, Backbone, _, $, undefined) {

	var __super__ = App.views.messageViews.AbstractMessageView.prototype;

	App.views.messageViews.UserLeave = App.views.messageViews.AbstractMessageView.extend({

		className: 'message userLeave',

		template: App.tmpl.message.userLeave

	});

}(window.SC, window.Backbone, window._, window.jQuery));