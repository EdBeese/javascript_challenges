const hero = document.querySelector(".hero");
const text = hero.querySelector('h1');
const walk = 100; // 100px

// My solution - which is much more succinct!
// function shadow(e) {
//   const x = (e.clientX / hero.clientWidth) * 100;
//   const y = (e.clientY / hero.clientHeight) * 100;
//   text.style.textShadow = `${x - 50}px ${y - 50}px 0 rgb(0 0 0)`
// }

// Tutor's solution
function shadowTutor(e) {
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX: x, offsetY: y } = e;

  // As it stands, the above will return the offset positions of a child element within it
  // That means that the x and y coordinates with be 0, 0 on the top corner of the h1
  // When we call 'this', it will change, depending on whether we are on the child or parent element
  // we are adding the distance from the child element to the top / left of the parent and adding it to the returned value
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x, y)

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(xWalk, yWalk)
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255 0 0),
    ${xWalk * -1}px ${yWalk}px 0 rgb(0 255 0),
    ${yWalk}px ${xWalk * -1}px 0 rgb(0 0 255),
    ${yWalk * - 1}px ${xWalk}px 0 rgb(10 20 30)
  `
}

hero.addEventListener('mousemove', shadowTutor);
