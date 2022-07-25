const panels = document.querySelectorAll('.panel');

//This EL for hovering

// panels.forEach((panel) => {
//   panel.addEventListener("mouseover", (event) => {
//     panel.classList.add("open-active", "open");
//   })
//   panel.addEventListener("mouseout", (event) => {
//     panel.classList.remove("open-active", "open");
//   })
// });

// This EL for clicking
function clickToggle() {
  this.classList.toggle('open');
}

function toggleActive(event) {
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener("click", clickToggle ));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
