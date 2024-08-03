const person = {
  name: "john",
};

console.log(person);
person.age = 25;

console.log(person);

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);

let appState = "loading";
appState = "error";
const keyName = "computer";

const app = {
  [appState]: true,
};
app[keyName] = "apple";

console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};
function updatestate(key, value) {
  return (state[key] = value);
}

updatestate("name", "john");
updatestate("job", "developer");
updatestate("loading", false);

console.log(state);
