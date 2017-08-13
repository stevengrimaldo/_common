import { hasClass } from './';

export default (el, className) => {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += ' ' + className;
  }
};
