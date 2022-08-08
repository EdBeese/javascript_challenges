const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const overNineteen = people.some((person) => {
  currentYear = new Date().getFullYear();
  return (person.year + 19) < currentYear;
});

console.log(overNineteen);
// Array.prototype.every() // is everyone 19 or older?
const allOverNineteen = people.every((person) => {
  currentYear = new Date().getFullYear();
  return (person.year + 19) < currentYear;
});

console.log(allOverNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const rightComment = comments.find((comment) => {
  return comment.id === 823423;
});

console.log(rightComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndex = comments.findIndex((comment) => {
  return comment.id === 823423;
});

console.log(commentIndex);

// comments.splice(findComment, 1);

const newComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1, )
];

console.table(comments);
console.table(newComments);
