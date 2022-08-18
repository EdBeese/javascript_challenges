const inputs = document.querySelectorAll('input');

//My Solution
// const inputsArray = [...inputs];

// let shiftDown = false;

// let firstKey = null;

// let selected = [];

// function checkShift() {
//   if (this.checked) {
//     if (shiftDown) {
//       let secondKey = inputsArray.indexOf(this);
//       if (firstKey < secondKey) {
//         selected = inputsArray.slice(firstKey, (secondKey + 1));
//       } else {
//         selected = inputsArray.slice(secondKey, (firstKey + 1));
//       }
//       selected.map((input) => input.checked = true);
//     }
//   }
// }

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Shift') {
//     firstKey = inputsArray.findIndex(input => input.checked);
//     shiftDown = true;
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.key === 'Shift') {
//     shiftDown = false;
//   }
// });

// inputsArray.forEach((input) => {
//   input.addEventListener('change', checkShift);
// });

// Tutor's solution

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    inputs.forEach(input => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        input.checked = true;
      }
    });
  }
  lastChecked = this;
}

inputs.forEach(input => input.addEventListener('click', handleCheck));
