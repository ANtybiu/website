import LocomotiveScroll from 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/+esm';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  tablet:{
    breakpoint:0,
  },
  smoothMobile: true,      // ✅ must add this
  smartphone: {
    smooth: true
  },
  multiplier: 1, // You can adjust scroll speed here
});

function nextBottle(){
  document.querySelector('.ms').style.marginLeft = '1rem'
}

const scaleElement = document.querySelector('#footer-section');

scroll.on('scroll', (args) => {
  const scrollY = args.scroll.y;
  const docHeight = document.body.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollableHeight = docHeight - winHeight;

  const progress = scrollY / scrollableHeight*0.5; // 0 → 1 over full scroll
  const scale = Math.min(Math.max(progress*2, 0), 2); // scale from 0 → 2

  scaleElement.style.transform = `scale(${scale})`;
});

window.addEventListener('load', () => {
  setTimeout(() => {
    scroll.update();
  }, 100); // or more if needed
});

window.addEventListener('resize', () => {
  // optional: trigger layout recalculation
  document.body.offsetHeight; // force reflow
});
