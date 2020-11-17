import {
  format, addSeconds, parse, formatDuration, formatDistance,
} from 'date-fns';
// import { videos } from '../../videos.json';

export function formatTimeStamp(duration) {
  if (duration >= 3600) {
    const klst = duration / 3600;
    const klstNamundad = Math.floor(klst);
    const minutur = klstNamundad * 60;
    const afgangur = duration - (klstNamundad * 3600);
    const afgangurIMinutum = afgangur / 60;
    const afgangurNamundað = Math.floor(afgangurIMinutum);
    const sekundur = afgangur - (afgangurNamundað * 60);
    let timaStrengur = `${minutur + afgangurNamundað}:${sekundur}`;
    if (sekundur < 10) {
      timaStrengur = `${minutur + afgangurNamundað}:0${sekundur}`;
    }
    return timaStrengur;
  }
  return format(addSeconds(new Date(0), duration), 'mm:ss');
}

export function setDuration() {

}

export function setVideoCreated() {

}


// export function loadVideoJson() {
//   const fjoldiVideos = Object.keys(videos).length;
//   for (let i = 0; i < fjoldiVideos; i += 1) {
//     const video = videos[i];
//     const { id, created, duration } = video;
//     const durationVideoElement = document.getElementById(`duration_${id}`);
//     durationVideoElement.innerText = formatTimeStamp(duration);
//     const createdVideoElement = document.getElementById(`date_${id}`);
//     createdVideoElement.innerText = formatDistance(created, new Date());
//   }
// }
