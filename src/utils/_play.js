export default (video, callback) => {
  const onEndCallbackFn = function () {
    if (callback && typeof callback === 'function') {
      callback.call(this);
    }
  };

  video.controls = true;
  video.play();

  onEndCallbackFn();
};
