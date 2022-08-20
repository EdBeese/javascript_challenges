// start with strings, numbers and booleans



// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
// team[2] = 'Edward';

// however what happens when we update that array?
// The original array is also updated, because it's a reference.

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const playersTwo = players.slice();

playersTwo[2] = 'Edward';



// or create a new array and concat the old one in
const playersThree = [].concat(players);

playersThree[2] = 'Gráinne';

console.log(players, playersTwo, playersThree);
// or use the new ES6 Spread

const playersFour = [...players];
playersFour[2] = 'Will';

console.log(players, playersTwo, playersThree, playersFour);

// Or a new array with Array.from()
const playersFive = Array.from(players);
playersFive[2] = 'Mike';

console.log(players, playersTwo, playersThree, playersFour, playersFive);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Ed',
  age: 36,
  social: {
    gitHub: 'EdBeese'
  }
};

// and think we make a copy:

// how do we take a copy instead?
const personCopy = Object.assign({}, person);

// There is also the Object Spread

const objectSpread = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
objectSpread.social.gitHub = 'I forgot my GitHub name';

// This will change the value of social.gitHub not only the objectSpread, but also the other two copies
const cheekyClone = JSON.parse(JSON.stringify(person));
