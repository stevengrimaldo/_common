export default (el, className) => {
  const re = new RegExp('(\\s|^)' + className + '(\\s|$)');

  return el.classList ? el.classList.contains(className) : el.className.match(re);
};
