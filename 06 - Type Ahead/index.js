const searchBar = document.querySelector(".search");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then((data) => {
    cities.push(...data);
  });

searchBar.addEventListener('keyup', update);

function update() {
  getResults(searchBar.value, cities)
}

function getResults(searchText, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(searchText, 'gi');
    return city.city.match(regex) || city.state.match(regex);
  });
};
