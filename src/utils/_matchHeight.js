export default (els) => {
  const cols = [].slice.call(els);
  const group = [];

  cols.forEach((el) => {
    el.style.height = 'auto';

    group.push(el.scrollHeight);

    cols.forEach((col) => {
      // eslint-disable-next-line prefer-spread
      col.style.height = Math.max.apply(Math, group) + 'px';
    });
  });
};
