const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);

const newPepole = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

const names = newPepole.map((person) => `<h1>${person.firstName}</h1>`);

const result = document.getElementById("result");
result.innerHTML = names.join('');




