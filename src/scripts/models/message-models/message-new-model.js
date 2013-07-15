(function (App, Backbone, _, $, undefined) {

	var __super__ = App.models.messageModels.AbstractMessage.prototype;

	App.models.messageModels.MessageNew = App.models.messageModels.AbstractMessage.extend({

		defaults: function () {
			return _.extend(_.result(__super__, 'defaults'), {
				body: ''
			});
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));