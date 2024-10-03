const hourItem = document.querySelector("#hour");
const minuteItem = document.querySelector("#minute");
const secondItem = document.querySelector("#second");
const meridian = document.getElementById("AM");
let isTwelveHourFormat = false;

function updateTime() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  if (hour > 12 && isTwelveHourFormat) {
    meridian.textContent = "PM";
  }

  if (isTwelveHourFormat) {
    hour = hour - 12;
  }

  hourItem.textContent = hour;
  minuteItem.textContent = minute;
  secondItem.textContent = second;
}

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector("#checkbox");
  setInterval(updateTime, 1000);
  checkbox.addEventListener("change", function (event) {
    isTwelveHourFormat = this.checked;
    updateTime();
  });
});



