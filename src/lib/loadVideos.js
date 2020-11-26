import { formatTimeStamp, formatCreated } from './time';

export function createHtml(videoInfo) {
  return `
      <div class="col col-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="mynd thumbnail">
            <a class="img-link" href="./video.html?id=${videoInfo.id}">
              <img src="${videoInfo.poster}" />
            </a>
            <div class="timestamp-container">
              <p id="duration_${videoInfo.id}" class="duration">${formatTimeStamp(videoInfo.duration)}</p>
            </div>
          </div>
          <div class="video">
            <a href="#"><h3 class="card_title_${videoInfo.id}">${videoInfo.title}</h3></a>
            <p class="date_${videoInfo.id}">${formatCreated(videoInfo.created)}</p>
          </div>
        </div>
      </div>
      `;
}

export function showData(videos, categories) {
  categories.forEach((category) => {
    category.videos = category.videos.sort();

    category.videos.forEach((videoID) => {
      const video = videos.filter(video => video.id === videoID)[0];

      let elementID;
      if (category.title === 'Nýleg myndbönd') {
        elementID = 'nyleg';
      } else if (category.title === 'Kennslumyndbönd'){
        elementID = 'teaching';
      } else if (category.title === 'Skemmtimyndbönd'){
        elementID = 'fun';
      }

      if (category.videos.includes(videoID)) {
        document.getElementById(elementID).insertAdjacentHTML('beforeend', createHtml(video));
      }
    })
  })
}

export function load() {
  fetch('./videos.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error('None 200 status');
      } else {
        res.json()
          .then((data) => {
            showData(data.videos, data.categories);
          })
            .catch(() => {
              const errorMessage = '<p>Óvænt villa</p>';
              document.getElementById('nyleg').insertAdjacentHTML('afterbegin', errorMessage);
            });
      }
    });
}
