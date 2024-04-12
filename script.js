const incr = document.querySelector("#increment-button");
const reset = document.querySelector("#reset-button");
const counter = document.querySelector("#counter");

let count = 0;

incr.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
