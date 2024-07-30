export function isInViewport(el, divisor) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + rect.height / divisor < window.innerHeight &&
    rect.left + rect.width / divisor < window.innerWidth &&
    rect.top + rect.height / divisor > 0 &&
    rect.left + rect.width / divisor > 0
  );
}
