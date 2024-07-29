const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// filter

const young = people.filter((person) => {
  // if(person.age < 24){
  //   return person
  // }

  return person.age < 26;
});
console.log(young);
