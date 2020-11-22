import { formatTimeStamp, formatCreated } from './time';

function showData(videos) {
  console.log('videos', videos);
  videos.forEach((video) => {
    console.log(formatTimeStamp(video.duration));
    const vidID = parseInt(video.id);
    const output = `
    <div class="col col-4">
      <div class="card">
        <div class="mynd thumbnail">
          <img src="${video.poster}" />
          <div class="timestamp-container"> 
          <p id="duration_${video.id}" class="duration">${formatTimeStamp(video.duration)}
          </p>
          </div>
        </div>
        <div class="video">
          <a href="#"><h3 class="card_title_${video.id}">${video.title}</h3></a>
          <p class="date_${video.id}">${formatCreated(video.created)}</p>
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
  return fetch('./videos.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error('None 200 status');
      } else {
        res.json()
          .then((data) => {
            console.log(data.videos);
            showData(data.videos);
          })
          .catch(() => {
            const errorMessage = '<p>Óvænt villa</p>';
          });
      }
    });
}
