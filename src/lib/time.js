import {
  format, addSeconds, parse, formatDuration, differenceInHours,
} from 'date-fns';

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

export function formatCreated(created) {
  const buidTil = differenceInHours(new Date(), created);
  const klstIAri = 8760;
  const klstIManudi = 730;
  const klstIViku = 168;
  const klstIDegi = 24;
  if (buidTil >= klstIAri) {
    if (Math.floor(buidTil / klstIAri) === 1) {
      return `Fyrir ${Math.floor(buidTil / klstIAri)} ári síðan`;
    }
    return `Fyrir ${Math.floor(buidTil / klstIAri)} árum síðan`;
  }
  if (buidTil >= klstIManudi) {
    if (Math.floor(buidTil / klstIManudi) === 1) {
      return `Fyrir ${Math.floor(buidTil / klstIManudi)} mánuði síðan`;
    }
    return `Fyrir ${Math.floor(buidTil / klstIManudi)} mánuðum síðan`;
  }

  if (buidTil >= klstIViku) {
    if (Math.floor(buidTil / klstIViku) === 1) {
      return `Fyrir ${Math.floor(buidTil / klstIViku)} viku síðan`;
    }
    return `Fyrir ${Math.floor(buidTil / klstIViku)} vikum síðan`;
  }

  if (buidTil >= klstIDegi) {
    if (Math.floor(buidTil / klstIViku) === 1) {
      return `Fyrir ${Math.floor(buidTil / klstIDegi)} degi síðan`;
    }
    return `Fyrir ${Math.floor(buidTil / klstIDegi)} dögum síðan`;
  }
  return buidTil;
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
