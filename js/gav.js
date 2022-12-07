document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').onclick = videoVolume;

let video;
let display;

video = document.querySelector('#video-player');

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
function speedUp() {};
function speedDown() {};
function speedNormal() {};
function videoVolume() {};