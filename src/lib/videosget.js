import { VideoControls } from './videoControls';

export function createRelated(relatedVideos) {
  // this function is refrenced in
  // relatedVideos = 'related' from Json (this is an array with id's of videos)
}

// create buttons
// export function createVideoHelper(container) {
//   const typeOfElement = 'button';

//   // back
//   let back = document.createElement(typeOfElement);
//   back.setAttribute('class', 'back');
//   container.appendChild(back);
//   // play
//   let play = document.createElement(typeOfElement);
//   play.setAttribute('class', 'play');
//   container.appendChild(play);
//   // sound
//   let sound = document.createElement(typeOfElement);
//   sound.setAttribute('class', 'sound');
//   container.appendChild(sound);
//   // fullscreen
//   let fullscreen = document.createElement(typeOfElement);
//   fullscreen.setAttribute('class', 'fullscreen');
//   container.appendChild(fullscreen);
//   // forward
//   let forward = document.createElement(typeOfElement);
//   forward.setAttribute('class', 'forward');
//   container.appendChild(forward);
// }

export function createVideo(child) {
  // get container
  const container = document.querySelector('.video');
  const decriptionContainer = document.querySelector('.description');
  const titleContainer = document.querySelector('.title');
  // title
  const title = document.createElement('h1');
  title.innerHTML = child.title;
  // video
  const videoContainer = document.createElement('div');
  const video = document.createElement('video');
  // video src
  const videoSRC = document.createElement('source');
  videoSRC.setAttribute('src', child.video);
  videoSRC.setAttribute('type', 'video/mp4');
  video.appendChild(videoSRC);

  // videoContainer.appendChild(video);
  // createVideoHelper(videoContainer);
  // description
  const description = document.createElement('p');
  description.innerHTML = child.description;
  // append
  titleContainer.appendChild(title);
  container.appendChild(video);
  container.appendChild(videoContainer);
  decriptionContainer.appendChild(description);
  VideoControls();
}

export function notFound() {
  const videoElement = document.createElement('p');
  videoElement.innerHTML = 'Could not find video';
  document.querySelector('.video').appendChild(videoElement);
}

export async function VideoGet() {
  try {
    const myURL = './videos.json';
    // get query
    const params = (new URL(window.location)).searchParams;

    // get query for 'id'
    const idparam = params.get('id');

    // get json
    const data = await fetch(myURL);
    const myjson = await data.json();

    /*
      // -- testing GET -- START
      // 1. create element
      let myElement = document.createElement('p');

      // 2. fill element
      myElement.innerHTML = `x = ${idparam}`;

      // 3. show element
      document.querySelector('main').appendChild(myElement);
      // -- testing GET -- END
      */

    // -- create video (if possible) -- START
    // check if posssible
    if (myjson && idparam) {
      // create checker for 'if found'
      let mybool = false;
      // search for video
      myjson.videos.forEach((child) => {
        // if video is found: create elements
        if (idparam === child.id) {
          createVideo(child);
          createRelated(child.related);
          mybool = true;
        }
      });
      // if the video was not found: set an element to say that
      if (!mybool) {
        notFound();
      }
    }
    // -- create video (if possible) -- END
  } catch (e) {
    notFound();
  }
}
