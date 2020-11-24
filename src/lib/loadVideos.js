import { formatTimeStamp, formatCreated } from './time';

function showData(videos, categories) {
  categories.forEach((category) => {
    category.videos.sort();

    category.videos.forEach((videoID) => {
      const videoArr = videos.filter((video) => video.id === videoID)[0];
      const createCard = `
      <div class="col col-4">
        <div class="card">
          <div class="mynd thumbnail">
            <a class="img-link" href="./video.html?id=${videoArr.id}">
              <img src="${videoArr.poster}" />
            </a>
            <div class="timestamp-container">
              <p id="duration_${videoArr.id}" class="duration">${formatTimeStamp(videoArr.duration)}</p>
            </div>
          </div>
          <div class="video">
            <a href="#"><h3 class="card_title_${videoArr.id}">${videoArr.title}</h3></a>
            <p class="date_${videoArr.id}">${formatCreated(videoArr.created)}</p>
          </div>
        </div>
      </div>
      `;

      let elementID;
      if (category.title === 'Nýleg myndbönd') {
        elementID = 'nyleg';
      } else if (category.title === 'Kennslumyndbönd') {
        elementID = 'teaching';
      } else if (category.title === 'Skemmtimyndbönd') {
        elementID = 'fun';
      }

      if (category.videos.includes(videoID)) {
        document.getElementById(elementID).insertAdjacentHTML('beforeend', createCard);
      }
    });
  });
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
