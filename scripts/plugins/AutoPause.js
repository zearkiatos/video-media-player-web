class AutoPause {
  THRESHOLD = 0.25;
  constructor() {
    this.threshold = this.THRESHOLD;
    this.handlerIntersection = this.handlerIntersection.bind(this);
  }
  run(player) {
    this.player = player;
    const configuration = {
      threshold: this.threshold,
    };
    const observer = new IntersectionObserver(
      this.handlerIntersection,
      configuration
    );

    observer.observe(this.player.media);
  }

  handlerIntersection(entries) {
    const entry = entries[0];
    const visible = entry.intersectionRation >= this.threshold;
    if (visible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
