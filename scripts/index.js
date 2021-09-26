const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(configuration) {
  this.media = configuration.element;
}

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

const player = new MediaPlayer({
  element: video,
});

button.onclick = () => {
  player.play();
};
