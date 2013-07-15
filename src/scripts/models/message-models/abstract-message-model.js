(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.Calculated.Model.prototype;

	App.models.messageModels.AbstractMessage = Backbone.Calculated.Model.extend({

		defaults: function () {
			return {
				user: ''
			};
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));