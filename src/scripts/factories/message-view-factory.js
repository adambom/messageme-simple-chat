(function (App, Backbone, _, $, undefined) {

	App.factories.messageViewFactory = App.factories.factoryFactory({
		message_new: App.views.messageViews.MessageNew,
		room_join: App.views.messageViews.RoomJoin,
		room_leave: App.views.messageViews.UserLeave,
		user_login: App.views.messageViews.UserLogin
	});

}(window.SC, window.Backbone, window._, window.jQuery));