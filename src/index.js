import { load } from './lib/loadVideos';
import { VideoGet } from './lib/videosget';

document.addEventListener('DOMContentLoaded', async () => {
  if (location.href.toString().includes('video.html')) { // eslint-disable-line no-restricted-globals
    VideoGet();
  } else {
    load();
  }
});
