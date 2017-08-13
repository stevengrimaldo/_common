export default (video) => {
  if (video.requestFullscreen) {
    video.requestFullscreen(); // standard
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  } else {
    console.error('Unable to find a fullscreen request method');
  }
};
