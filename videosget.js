
function createVideo(child) {
  // get container
  let container = document.querySelector('.video');
  // title
  let title = document.createElement('h1');
  title.innerHTML = child.title;
  // video
  let video = document.createElement('video');
  let videoSRC = document.createElement('source');
  videoSRC.setAttribute('src', child.video);
  videoSRC.setAttribute('type', 'video/mp4');
  video.appendChild(videoSRC);
  // description
  let description = document.createElement('p');
  description.innerHTML = child.description;
  // append
  container.appendChild(title);
  container.appendChild(video);
  container.appendChild(description);
}

document.addEventListener('DOMContentLoaded', async () => {
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
    if(myjson && idparam) {
      // create checker for 'if found'
      let mybool = false;
      // search for video
      myjson.videos.forEach((child) => {
        // if video is found: create elements
        if(idparam == child.id) {
          createVideo(child);
          // createRelated(child.related);
          mybool = true;
        }
      });
      // if the video was not found: set an element to say that
      if (!mybool) {
        let videoElement = document.createElement('p');
        videoElement.innerHTML = 'Could not find video';
        document.querySelector('.video').appendChild(videoElement);
      }
    }
    // -- create video (if possible) -- END

  } catch (e) {
    console.log(e);
  }

});

