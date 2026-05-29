// Scroll choreography, all dependency-free:
//   1. fade/slide-in reveals via IntersectionObserver
//   2. timeline progress line that "draws" as you scroll through it
//   3. active-tab highlighting in the nav
// Everything degrades gracefully and honours prefers-reduced-motion.

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

function setupReveals() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

function setupTimelineFill() {
  const timeline = document.querySelector<HTMLElement>('[data-timeline]');
  const fill = document.querySelector<HTMLElement>('[data-timeline-fill]');
  const items = Array.from(
    document.querySelectorAll<HTMLElement>('.t-item'),
  );
  if (!timeline || !fill) return;

  if (reduceMotion) {
    fill.style.setProperty('--progress', '1');
    items.forEach((i) => i.classList.add('is-visible'));
    return;
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the timeline top reaches mid-viewport, 1 when bottom passes it
    const anchor = vh * 0.5;
    const total = rect.height;
    const scrolled = anchor - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / total));
    fill.style.setProperty('--progress', progress.toFixed(4));

    // light up nodes the fill has reached
    for (const item of items) {
      const node = item.querySelector<HTMLElement>('.t-node');
      if (!node) continue;
      const nodeRect = node.getBoundingClientRect();
      if (nodeRect.top <= anchor) item.classList.add('is-visible');
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

function setupNavSpy() {
  const tabs = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.tab[data-nav]'),
  );
  const map = new Map<string, HTMLAnchorElement>();
  tabs.forEach((t) => map.set(t.dataset.nav!, t));
  const sections = ['home', 'timeline', 'kualia']
    .map((id) => document.getElementById(id))
    .filter((s): s is HTMLElement => Boolean(s));
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const key = entry.target.id;
          tabs.forEach((t) =>
            t.setAttribute('data-active', String(t.dataset.nav === key)),
          );
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => io.observe(s));
}

function init() {
  setupReveals();
  setupTimelineFill();
  setupNavSpy();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
