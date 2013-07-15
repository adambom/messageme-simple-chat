(function () {

var SoundManager = function () {
	var sounds = $('[data-target="soundmanager"]');
	var that = this;

	this.sounds = {};

	sounds.find('audio[data-name]').each(function () {
		that.sounds[$(this).data('name')] = this;
	});
};

SoundManager.prototype.play = function (name) {
	if (this.sounds[name]) {
		if (window.chrome) this.sounds[name].load();
		this.sounds[name].play();
	}
};

window.SoundManager = SoundManager;


}());