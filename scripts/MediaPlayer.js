function MediaPlayer(configuration) {
  this.media = configuration.element;
  this.plugins = configuration.plugins || [];

  this.initializationPlugins();
}

MediaPlayer.prototype.initializationPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(mute) {
      this.media.muted = mute;
    }
  };
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.pause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute();
};

export default MediaPlayer;
