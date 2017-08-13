import { hasClass } from './';

export default (el, className) => {
  const re = new RegExp('(\\s|^)' + className + '(\\s|$)');

  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    el.className = el.className.replace(re, '');
  }
};
