(function (App, Backbone, _, $, undefined) {

	var __super__ = App.models.messageModels.AbstractMessage.prototype;

	App.models.messageModels.MessageNew = App.models.messageModels.AbstractMessage.extend({

		defaults: function () {
			return _.extend(_.result(__super__, 'defaults'), {
				body: ''
			});
		},

		calculated: {
			parsedBody: {
				dependencies: 'body',
				getter: function () {
					var body = this.get('body');

					return this.replaceUrl(body);
				}
			}
		},

		replaceUrl: function (inputText) {
			var replacedText, replacePattern1, replacePattern2, replacePattern3;

			//URLs starting with http://, https://, or ftp://
			replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
			replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

			//URLs starting with "www." (without // before it, or it'd re-link the ones done above).
			replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
			replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

			//Change email addresses to mailto:: links.
			replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
			replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

			return replacedText;
		}

	});

}(window.SC, window.Backbone, window._, window.jQuery));