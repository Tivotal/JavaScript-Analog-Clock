/* Created by Tivotal */

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrDeg = 30 * hr + min / 2;
  let minDeg = 6 * min;
  let secDeg = 6 * sec;

  hourHand.style.transform = `rotate(${hrDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}, 1000);
