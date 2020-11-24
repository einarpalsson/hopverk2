export function VideoControls() { // kallað í videoget.js
  const video = document.querySelector('video');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const backward = document.getElementById('back');
  const forward = document.getElementById('forward');
  const mute = document.getElementById('mute');
  const unmute = document.getElementById('unmute');
  const fullscreen = document.getElementById('fullscreen');

  const overlay = document.getElementById('overlay');

  fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.mozRequestFullscreen) video.mozRequestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  });

  backward.addEventListener('click', () => {
    video.currentTime -= 3;
  });

  forward.addEventListener('click', () => {
    video.currentTime += 3;
  });

  mute.addEventListener('click', () => {
    if (!video.muted) {
      video.muted = true;
      mute.classList.remove('mute-btn-visible');
      mute.classList.add('mute-btn');
      unmute.classList.add('unmute-btn-visible');
      unmute.classList.remove('unmute-btn');

      unmute.addEventListener('click', () => {
        video.muted = false;
        unmute.classList.remove('unmute-btn-visible');
        unmute.classList.add('unmute-btn');
        mute.classList.remove('mute-btn');
        mute.classList.add('mute-btn-visible');
      });
    }
  });

  [playButton, pauseButton, video].forEach((el) => {
    el.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.classList.remove('play-btn-visible');
        playButton.classList.add('play-btn');
        pauseButton.classList.add('pause-btn-visible');
        pauseButton.classList.remove('.pause-btn');
        overlay.classList.remove('overlay');
        overlay.classList.add('overlay-hidden');
      } else {
        video.pause();
        playButton.classList.add('play-btn-visible');
        playButton.classList.remove('play-btn');
        pauseButton.classList.add('pause-btn');
        pauseButton.classList.remove('pause-btn-visible');
        overlay.classList.remove('overlay-hidden');
        overlay.classList.add('overlay');
      }
    });
  });
}
