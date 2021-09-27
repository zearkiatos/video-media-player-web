function MediaPlayer(configuration) {
  this.media = configuration.element;
}

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

export default MediaPlayer;
