(function (App, Backbone, _, $, undefined) {

	App.factories.messageModelFactory = App.factories.factoryFactory({
		message_new: App.models.messageModels.MessageNew,
		room_join: App.models.messageModels.RoomJoin,
		room_leave: App.models.messageModels.UserLeave,
		user_login: App.models.messageModels.UserLogin
	});

}(window.SC, window.Backbone, window._, window.jQuery));