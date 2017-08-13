export default (node) => {
  let index = 0;

  // eslint-disable-next-line no-cond-assign
  while ((node = node.previousElementSibling) !== null) {
    index += 1;
  }

  return index;
};
