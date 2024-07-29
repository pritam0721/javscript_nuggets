// const fruits = ["orange", "banana", "lemon"];
// const friends = ["john", "peter", "bob", "anna", "kelly"];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// console.log(fruit1, fruit2, fruit3);

// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob);

// let first = 'bob';
// let second = 'john';

// [second,first] = [first,second];

// console.log(first,second);

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

console.log(bob);

const {
  first: firstName,
  last,
  city,
  siblings: { sister: favouriteSiblings },
} = bob;

console.log(firstName, last);

function printPerson(person) {
  console.log(person.first);
}

printPerson(bob);

const udemy = "udemy";

const letters = [...udemy];

console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

newFriends = [...friends];
newFriends[0] = "logan";
console.log(newFriends);
// const person = { name: "john", job: "developer" };
// const details = {...person,city:'kolkata',pin:'2345678'}
// console.log(details);

const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...restOfTheFruits] = fruits;

console.log(fruits);

console.log(restOfTheFruits);

const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
console.log(job, rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

scores = ["90", "60", "40", "30"];

getAverage(person.name, ...scores);
