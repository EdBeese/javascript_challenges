const searchBar = document.querySelector(".search");

const list = document.querySelector(".suggestions");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then((data) => {
    cities.push(...data);
  });

searchBar.addEventListener('keyup', update);

function update() {
  const results = getResults(searchBar.value, cities);
  let html = results.map(city => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = city.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = city.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `<li>
      <span>${cityName}, ${stateName}</span>
      <span>${city.population}</span>
    </li>`;
  }).join('');
  if (searchBar.value === "") {
    html = `<li>Filter for a city</li>
    <li>or a state</li>`
  };
  list.innerHTML = html;
};

function getResults(searchText, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(searchText, 'gi');
    return city.city.match(regex) || city.state.match(regex);
  });
};
