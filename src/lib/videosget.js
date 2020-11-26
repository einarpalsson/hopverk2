import { VideoControls } from './videoControls.js';
import { createHtml } from './loadVideos';

export function createVideo(child, videos) {
  console.log(child);
  let container = document.querySelector('.video');
  let decriptionContainer = document.querySelector('.description');
  let titleContainer = document.querySelector('.title');
  let title = document.createElement('h1');
  title.innerHTML = child.title;
  let videoContainer = document.createElement('div');
  let video = document.createElement('video');
  let videoSRC = document.createElement('source');
  videoSRC.setAttribute('src', child.video);
  videoSRC.setAttribute('type', 'video/mp4');
  video.appendChild(videoSRC);
  let description = document.createElement('p');
  description.innerHTML = child.description;

  child.related = child.related.sort();
  child.related.forEach((relatedVid) => {
    const video = videos.filter(video => video.id === relatedVid)[0];
    if (child.related.includes(relatedVid)) {
      document.getElementById('related').insertAdjacentHTML('beforeend', createHtml(video));
    }
  })

  titleContainer.appendChild(title);
  container.appendChild(video);
  container.appendChild(videoContainer);
  decriptionContainer.appendChild(description);
  VideoControls();
}

export function notFound() {
  let videoElement = document.createElement('p');
  videoElement.innerHTML = 'Could not find video';
  document.querySelector('.video').appendChild(videoElement);
}

export async function VideoGet() {
    try {
      const myURL = './videos.json';
      const params = (new URL(window.location)).searchParams;
      const idparam = params.get('id');
      const data = await fetch(myURL);
      const myjson = await data.json();

      if(myjson && idparam) {
        let mybool = false;
        myjson.videos.forEach((child) => {
          if(idparam == child.id) {
            createVideo(child, myjson.videos);
            mybool = true;
          }
        });
        if (!mybool) {
          notFound();
        }
      }
    } catch (e) {
      console.log(e);
      notFound();
    }
}
