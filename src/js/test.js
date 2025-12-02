const marqueeTrack = document.querySelector(".marquee-track");

marqueeTrack.addEventListener("mouseenter", () => {
  marqueeTrack.style.animationPlayState = "paused";
});

marqueeTrack.addEventListener("mouseleave", () => {
  marqueeTrack.style.animationPlayState = "running";
});
