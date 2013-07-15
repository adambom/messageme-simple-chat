(function (App, Backbone, _, $, undefined) {

	var __super__ = App.models.messageModels.AbstractMessage.prototype;

	App.models.messageModels.RoomJoin = App.models.messageModels.AbstractMessage.extend({

		defaults: function () {
			return _.extend(_.result(__super__, 'defaults'), {
				user: {
					user_id: 0,
					name: ''
				}
			});
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));