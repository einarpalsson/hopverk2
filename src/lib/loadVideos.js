// function makeHtml(data) {
//   return data.foreach((content) => {
//     const output = `
//     <div class="col col-4">
//       <div class="card">
//         <div class="mynd thumbnail>
//           <img src"${content.videos.poster}"
//         </div>
//         <div class"content">
//           <h3 class="card_title_${content.videos.id}">${content.videos.title}</h3>
//           <p class="date_${content.videos.i}">Ehv tímann</p>
//         </div>
//       </div>
//     </div>
//     `;
//     console.log(output);
//     document.querySelector('.insertion').insertAdjacentHTML('beforeend', output);
//   })
// }

export function load() {
  return fetch('./videos.json');
  // .then((res) => {
  //   if (!res.ok) {
  //     throw new Error('None 200 status');
  //   } else {
  //       res.json()
  //       .then((data) => {
  //         })
  //       .catch(() => {
  //         const errorMessage = `<p>Óvænt villa</p>`;

  //       })
  //   }
  // })
}
