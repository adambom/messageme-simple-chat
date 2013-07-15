(function (App, Backbone, _, $, undefined) {

	var __super__ = App.views.messageViews.AbstractMessageView.prototype;

	App.views.messageViews.UserLogin = App.views.messageViews.AbstractMessageView.extend({

		className: 'message userLogin',

		template: App.tmpl.message.userLogin

	});

}(window.SC, window.Backbone, window._, window.jQuery));