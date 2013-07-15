(function (App, Backbone, _, $, undefined) {

	var __super__ = Backbone.View.prototype;

	App.views.InputArea = Backbone.View.extend({

		events: {
			'submit form': 'submit'
		},

		template: App.tmpl.inputArea,

		initialize: function () {
			this.listenTo(this.model, 'change:rewinding', this.render);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
		},

		submit: function (e) {
			e.preventDefault();

			var $input = this.$('.input');

			var input = $input.val();

			this.model.sendMessage(input);

			$input.val('');
		}


	});

}(window.SC, window.Backbone, window._, window.jQuery));