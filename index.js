var counter = 1;
let left = document.getElementById("leftkey");
let right = document.getElementById("rightkey");

function changeNext() {
  counter++;
  right.href = `#slide-${counter}`;
  if (counter > 4) {
    counter = 0;
  }
}
function changePrev() {
  if (counter === 1) {
    counter = 6;
    counter--;
    left.href = `#slide-${counter}`;
  } else if (counter > 1 && counter < 6) {
    counter--;
    left.href = `#slide-${counter}`;
  }
}
