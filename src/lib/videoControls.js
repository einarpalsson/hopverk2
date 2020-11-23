
const video = document.querySelector('video');
const button = document.querySelector('.play');
const backward = document.querySelector('.back');
const forward = document.querySelector('.forward');
const sound = document.querySelector('.sound');
const fullscreen = document.querySelector('.fullscreen');

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

sound.addEventListener('click', () => {
  if (video.muted) {
    video.muted=false;
    sound.removeChild(sound.firstChild);
    sound.appendChild(document.createTextNode('Sound'));
  } else {
    video.muted=true;
    sound.removeChild(sound.firstChild);
    sound.appendChild(document.createTextNode('Sound Muted'));
  }
});

button.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    button.removeChild(button.firstChild);
    button.appendChild(document.createTextNode('Pause'));
  } else {
    video.pause();
    button.removeChild(button.firstChild);
    button.appendChild(document.createTextNode('Play'));
  }
});
