export default (callBack) => {
  const callbacks = [];
  let running = false;

  // run the actual callbacks
  const runCallbacks = () => {
    callbacks.forEach((callback) => {
      callback();
    });

    running = false;
  };

  // fired on resize event
  const resize = () => {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  };

  // adds callback to loop
  const addCallback = (callback) => {
    if (callback) {
      callbacks.push(callback);
    }
  };

  if (!callbacks.length) {
    window.addEventListener('resize', resize);
  }

  addCallback(callBack);
};
