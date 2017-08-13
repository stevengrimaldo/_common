export default (el) => {
  const rect = el.getBoundingClientRect();
  const html = document.documentElement;

  return (
    (rect.top + rect.height) < 0 ||
    (rect.left + rect.width) < 0 ||
    rect.left > (window.innerWidth || html.clientWidth) ||
    rect.top > (window.innerHeight || html.clientWidth)
  );
};
