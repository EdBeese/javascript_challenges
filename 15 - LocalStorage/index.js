const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const deleteAll = document.querySelector('.delete-all');
const checkGroup = document.querySelectorAll('.check-group');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name = item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  const listItems = plates.map((plate, i) => {
    return`
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ""}/>
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
  platesList.innerHTML = listItems;
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function allDeleted() {
  console.log('hi')
  items.splice(0, items.length);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function allChecked(e) {
  items.map ((item) => {
    return item.done = e.target.dataset.check === 'check' ? true : false;
  })
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
deleteAll.addEventListener('click', allDeleted);
checkGroup.forEach ((button) => {addEventListener('click', allChecked)});
populateList(items, itemsList);
