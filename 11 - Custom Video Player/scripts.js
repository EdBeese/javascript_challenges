const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playerButton = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const expand = document.querySelector('.expand');

//Variables
let scrubClicked = false;

//functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function setRange() {
  video[this.name] = this.value;
};

function changeTime() {
  video.currentTime += parseFloat(this.dataset.skip);
};

function changeIcon() {
  const icon = this.paused ? '►' : '❚ ❚';
  playerButton.textContent = icon;
};

//My solution
// const setTimeBar = setInterval(() => {
//   let percent = video.currentTime / video.duration * 100;
//   progressBar.style.flexBasis = `${percent}%`;
// }, 100);

//Tutor's solution
function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

video.addEventListener('timeupdate', handleProgress);

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
};

//event-listeners
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    togglePlay();
  }
});
playerButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);
ranges.forEach(range => range.addEventListener('input', setRange));
skipButtons.forEach(button => button.addEventListener('click', changeTime));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => scrubClicked && scrub(e));
progress.addEventListener('mousedown', () => scrubClicked = true);
document.addEventListener('mouseup', () => scrubClicked = false);
expand.addEventListener('click', fullScreen);
