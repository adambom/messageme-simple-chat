(function (App, Backbone, _, $, undefined) {

	// I know having a factory factory sounds ridiculous
	// but it kinda makes sense since it makes my
	// factories more DRY

	App.factories.factoryFactory = function (types) {
		return function (type, options) {
			return types[type] && new types[type](options) || null;
		};
	};

}(window.SC, window.Backbone, window._, window.jQuery));