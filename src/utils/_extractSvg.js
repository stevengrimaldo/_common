import {
  get,
  addClass
} from './';

export default (els) => {
  const elem = [].slice.call(els);

  elem.forEach((el) => {
    const that = el;
    const parent = that.parentNode;
    const id = that.getAttribute('id');
    const selector = that.getAttribute('class');
    const src = that.getAttribute('src');

    get(src, (data) => {
      const oParser = new DOMParser();
      const oDOM = oParser.parseFromString(data, 'image/svg+xml');
      const svgEl = oDOM.documentElement;

      if (id) {
        svgEl.setAttribute('id', id);
      }

      if (selector) {
        addClass(svgEl, selector);
      }

      addClass(svgEl, 'replaced-svg');
      svgEl.removeAttribute('xmlns:a');

      parent.innerHTML = '';
      parent.appendChild(svgEl);
    });
  });
};
