(function (App, Backbone, _, $, undefined) {

	var init = function () {
		var remember = localStorage.getItem('remember');

		// using == on purpose
		if (remember == true) {
			App.user = localStorage.getItem('username');
		} else {
			localStorage.removeItem('username');
			App.user = undefined;
		}

		App.router = new App.routers.Main();
		Backbone.history.start();
	};

	$(init);

}(window.SC, window.Backbone, window._, window.jQuery));