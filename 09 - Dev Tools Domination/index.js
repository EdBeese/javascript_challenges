const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
// Interpolated
console.log('Hi there, I am a %s string', '😹')
const yourName = 'Edward'
console.log(`Hi there, I am ${yourName}`)
// Styled
console.log('%c I am some big-ass text', 'font-size: 30px; background:red;')
// warning!
console.warn("ONE OF THESE DAYS, I'M GONNA TEAR YOU INTO LITTLE PIECES!")
// Error :|
console.error("I'm sorry Dave, but I can't do that.")
// Info (doesn't appear to do anything in Chrome any longer)
console.info('The Battle of Bosworth was fought in 1485');
// Testing - if the asscertion is wrong, then it will log the string in an error format
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch!'), 'That is wrong')
// clearing - this clears the console
console.clear()
// Viewing DOM Elements - gives all info on an element
console.dir(p);
// Grouping together - will show groupings of logged info in a drop down
dogs.forEach(dog => {
  console.groupCollapsed(dog.name); //groupCollapsed will automatically present them collapsed
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`That is ${dog.age * 7} dog years.`);
  console.groupEnd(dog.name);
});
// counting - logs the number of times something has been logged to the console
console.count('Ed');
console.count('Ed');
console.count('Gráinne');
console.count('Ed');
console.count('Ed');
console.count('Ed');
console.count('Ed');
console.count('Gráinne');
console.count('Gráinne');
console.count('Gráinne');
// timing - tells you how long a job took in miliseconds
console.time('fetching data');
fetch('https://api.github.com/users/EdBeese')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
//table - presents an array of objects as a nice table
console.table(dogs);
