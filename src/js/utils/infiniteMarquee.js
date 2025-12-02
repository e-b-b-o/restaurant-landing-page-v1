export function setupInFiniteMarquee(selector) {
  const marqueeTrack = document.querySelector(selector);
  const items = Array.from(marqueeTrack.children);

  function dublicateUntilFull() {
    let trackWidth = marqueeTrack.scrollWidth;
    let containerWidth = marqueeTrack.parentElement.offsetWidth;

    while (trackWidth < containerWidth * 2) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        marqueeTrack.appendChild(clone);
      });
      trackWidth = marqueeTrack.scrollWidth;
    }
  }
  dublicateUntilFull();
}
