(function (App, Backbone, _, $, undefined) {

	var __super__ = App.views.messageViews.AbstractMessageView.prototype;

	App.views.messageViews.RoomJoin = App.views.messageViews.AbstractMessageView.extend({

		className: 'message roomJoin',

		template: App.tmpl.message.roomJoin

	});

}(window.SC, window.Backbone, window._, window.jQuery));