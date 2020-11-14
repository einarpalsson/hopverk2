import { load } from './lib/loadVideos';

document.addEventListener('DOMContentLoaded', async () => {
  function showData(videos) {
    console.log('videos', videos)
    videos.forEach((video) => {
      console.log('Þetta console log prentast', video);
      const output = `
      <div class="col col-4">
        <div class="card">
          <div class="mynd thumbnail">
            <img src="${video.poster}" />
          </div>
          <div class"video">
            <h3 class="card_title_${video.id}">${video.title}</h3>
            <p class="date_${video.id}">Ehv tímann</p>
          </div>
        </div>
      </div>
      `;
      document.getElementById('test').insertAdjacentHTML('afterbegin', output);
    });
  }

  load()
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
});
