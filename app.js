const newYear = "1/1/2024";

const daysEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".seconds");
const myImage = document.getElementById("myImage"); // Ensure this ID matches your HTML
const audioBG = new Audio("bg.mp3");
const audioTenSecs = new Audio("final.mp3");

audioBG.loop = true;

audioBG.oncanplaythrough = () => {
  audioBG.play();
};

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = Math.floor((newYearDate - nowDate) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);

  if (hours === 0 && minutes === 0 && seconds <= 10 && seconds > 0) {
    audioTenSecs.play();
    audioBG.pause();
  }

  if (hours === 0 && minutes === 0 && seconds === 0) {
    myImage.style.display = "block";
    myImage.src = "newyear.png";
    audioBG.pause();
    clearInterval(interval); // Make sure to clear the interval
  }
}

function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
}

document.addEventListener("click", function () {
  audioBG.play();
});

audioBG.oncanplaythrough = () => {
  audioBG.play();
  setInterval(timeCountDown, 1000);
};
