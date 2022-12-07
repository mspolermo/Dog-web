document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
    video.play();
};
function pause() {
    video.pause();
};
function stop() {
    video.pause();
    video.currentTime = 0;
};
function speedUp() {
    video.play()
    video.playbackRate = 2;
};
function speedDown() {
    video.play()
    video.playbackRate = 0.5;
};
function speedNormal() {
    video.play()
    video.playbackRate = 1;
};
function videoVolume() {
    let v = this.value;
    video.volume = v /100;
};

function progressUpdate () {
    let d = video.duration;
    let c = video.currentTime;
    progress.value = (100 * c) / d;
    vremya = "00:"+Math.round(video.currentTime)+" сек";
    document.querySelector('#out').innerHTML = vremya;
};

function videoRewind () {
let w = this.offsetWidth; /*Определяем ширину саундпрогресса*/
let o = event.offsetX; /*Определяем значение куда щелкнули на саундпрогрессе*/
this.value = 100 * o / w;
video.pause();
video.currentTime = video.duration * (o / w);
video.play();
};