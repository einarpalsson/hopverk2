import { formatTimeStamp, formatCreated } from './time';

function showData(videos, categories) {
  categories.forEach((category) => {
    category.videos = category.videos.sort();

    category.videos.forEach((videoID) => {
      const video = videos.filter(video => video.id === videoID)[0];
      const createCard = `
      <div class="col col-4">
        <div class="card">
          <div class="mynd thumbnail">
            <a class="img-link" href="./video.html?id=${video.id}">
              <img src="${video.poster}" />
            </a>
            <div id="duration_${video.id}" class="duration">${formatTimeStamp(video.duration)}</div>
          </div>
          <div class="video">
            <a href="#"><h3 class="card_title_${video.id}">${video.title}</h3></a>
            <p class="date_${video.id}">${formatCreated(video.created)}</p>
          </div>
        </div>
      </div>
      `;

      let elementID;
      if (category.title === 'Nýleg myndbönd') {
        elementID = 'nyleg';
      } else if (category.title === 'Kennslumyndbönd'){
        elementID = 'teaching';
      } else if (category.title === 'Skemmtimyndbönd'){
        elementID = 'fun';
      }

      if (category.videos.includes(videoID)) {
        document.getElementById(elementID).insertAdjacentHTML('beforeend', createCard);
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
