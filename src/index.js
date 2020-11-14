import { load } from './lib/loadVideos';

document.addEventListener('DOMContentLoaded', async () => {
  function showData(data) {
    return data.forEach((content) => {
      console.log('Þetta console log prentast')
      const output = `
      <div class="col col-4">
        <div class="card">
          <div class="mynd thumbnail>
            <img src"${content.videos.poster}"
          </div>
          <div class"content">
            <h3 class="card_title_${content.videos.id}">${content.videos.title}</h3>
            <p class="date_${content.videos.id}">Ehv tímann</p>
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
            showData(data.videos);
          })
          .catch(() => {
            const errorMessage = '<p>Óvænt villa</p>';
          });
      }
    });
});
