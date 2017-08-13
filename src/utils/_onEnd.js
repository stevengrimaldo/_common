export default (video, callback) => {
  const onEndCallbackFn = function () {
    if (callback && typeof callback === 'function') {
      callback.call(this);
    }
  };

  video.controls = false;

  video.addEventListener('ended', onEndCallbackFn, false);
};
