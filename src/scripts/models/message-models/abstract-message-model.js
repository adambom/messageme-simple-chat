(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.Model.prototype;

	App.models.messageModels.AbstractMessage = Backbone.Model.extend({

		defaults: function () {
			return {
				user: ''
			};
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));