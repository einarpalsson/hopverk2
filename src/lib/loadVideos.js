import { formatTimeStamp } from './time';

function showData(videos) {
  videos.forEach((video) => {
    const vidID = parseInt(video.id, 10);
    const output = `
    <div class="col col-4">
      <div class="card">
        <div class="mynd thumbnail">
          <img src="${video.poster}" />
          <div id="duration_${video.id}" class="duration">${formatTimeStamp(video.duration)}</div>
        </div>
        <div class="video">
          <a href="#"><h3 class="card_title_${video.id}">${video.title}</h3></a>
          <p class="date_${video.id}">Ehv tímann</p>
        </div>
      </div>
    </div>
    `;

    if (vidID <= 3) {
      document.getElementById('nyleg').insertAdjacentHTML('beforeend', output);
    }

    if (vidID <= 6) {
      document.getElementById('teaching').insertAdjacentHTML('beforeend', output);
      document.getElementById('fun').insertAdjacentHTML('beforeend', output);
    }
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
            showData(data.videos);
          })
          .catch(() => {
            const errorMessage = '<p>Óvænt villa</p>';
            document.getElementById('nyleg').insertAdjacentHTML('afterbegin', errorMessage);
          });
      }
    });
}
