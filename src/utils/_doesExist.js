export default (el) => {
  const hasEl = document.body.contains(el);

  return (el === document.body) ? false : hasEl;
};
