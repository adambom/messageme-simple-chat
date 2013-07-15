(function (App, Backbone, _, $, undefined) {

	var init = function () {
		audiojs.events.ready(function() {
			var as = audiojs.createAll({
				createPlayer: false
			});
		});

		App.soundManager = new SoundManager();

		App.router = new App.routers.Main();
		Backbone.history.start();

		var remember = localStorage.getItem('remember');

		if (remember === 'true') {
			App.user = localStorage.getItem('username');

			if (App.user) {
				App.router.navigate('chat', { trigger: true });
			}
		} else {
			localStorage.removeItem('username');
			App.user = undefined;
		}
	};

	$(init);

}(window.SC, window.Backbone, window._, window.jQuery));