import { load } from './lib/loadVideos';
import { loadVideoJson } from './lib/time';

document.addEventListener('DOMContentLoaded', async () => {
  load();
  loadVideoJson();
});
