(function (App, Backbone, _, $, undefined) {

	App.factories.messageFactory = function (type, payload) {
		var model = App.factories.messageModelFactory(type, payload);

		if (!model) return null;

		return App.factories.messageViewFactory(type, {
			model: model
		});
	};

}(window.SC, window.Backbone, window._, window.jQuery));