const clickEvent = (document.ontouchstart !== null ? 'click' : 'touchstart');

export default (els, callback) => {
  const elem = [].slice.call(els);

  const bindEvents = (item) => {
    const onEndCallbackFn = function (scope) {
      const oldScope = document.querySelector('[data-current-scope]');
      if (oldScope) {
        document.querySelector('[data-current-scope]').removeAttribute('data-current-scope');
      }
      scope.setAttribute('data-current-scope', '');

      if (callback && typeof callback === 'function') {
        callback.call(this);
      }
    };

    const touchEnd = (scope) => {
      onEndCallbackFn(scope);

      item.removeEventListener('touchend', touchEnd, false);
    };

    const touchMove = () => {
      item.removeEventListener('touchend', touchEnd, false);
    };

    const manageTouch = (scope) => {
      item.addEventListener('touchend', touchEnd(scope), false);
      item.addEventListener('touchmove', touchMove, false);
    };

    item.addEventListener(clickEvent, (ev) => {
      ev.preventDefault();

      if (clickEvent === 'click') {
        onEndCallbackFn(ev.currentTarget);
      } else {
        manageTouch(ev.target);
      }
    }, false);
  };

  elem.forEach((el) => {
    bindEvents(el);
  });
};
