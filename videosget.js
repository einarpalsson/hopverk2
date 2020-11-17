
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

    // -- testing GET -- START
    // 1. create element
    let myElement = document.createElement('p');

    // 2. fill element
    myElement.innerHTML = `x = ${idparam}`;

    // 3. show element
    document.querySelector('main').appendChild(myElement);
    // -- testing GET -- END

    // -- create video (if possible) -- START
    // 1. check if posssible
    if(myjson && idparam) {
      // 2. create element
      let videoElement = document.createElement('p');
      // 3. create checker for 'if found'
      let mybool = false;
      // 4. search for video
      myjson.videos.forEach((child) => {
        // 5. if video is found: set the title to element
        if(idparam == child.id) {
          videoElement.innerHTML = child.title;
          mybool = true;
        }
      });
      // 6. if the video was not found: set the element to say that
      if (!mybool) {
        videoElement.innerHTML = 'Could not find video';
      }
      // 7. show element
      document.querySelector('main').appendChild(videoElement);
    }
    // -- create video (if possible) -- END

  } catch (e) {
    console.log(e);
  }

});

