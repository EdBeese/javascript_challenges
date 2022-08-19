const secretDiv = document.querySelector('.secret');
const pressed = [];
const secretCode = 'picard';

function checkForSecret() {
  if (pressed.join('').includes(secretCode)) {
    secretDiv.innerHTML = '<img src="picard.jpeg" alt="">';
  }
};

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  checkForSecret();
});
