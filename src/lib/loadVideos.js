function showData(videos) {
  console.log('videos', videos)
  videos.forEach((video) => {
    const vidID = parseInt(video.id);
    const output = `
    <div class="col col-4">
      <div class="card">
        <div class="mynd thumbnail">
          <img src="${video.poster}" />
        </div>
        <div class="video">
          <a href="#"><h3 class="card_title_${video.id}">${video.title}</h3>
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
