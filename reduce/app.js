const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "the boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 10 },
];

const dailySalary = staff.reduce((total, person) => {
  total += person.salary;
  return total;
}, 0);

console.log(dailySalary);

const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

const { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    //    total.totalItems += cartItem.amount;
    //    total.cartTotal += cartItem.price * cartItem.amount ;

    const { amount, price } = cartItem;

    total.totalItems += amount;
    total.cartTotal += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

console.log(totalItems, parseFloat(cartTotal.toFixed(2)));

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchResponse = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  if (!Array.isArray(data)) {
    throw new Error("Fetched data is not an array");
  }
  const newData = data.reduce((total, repos) => {}, {});
};
fetchResponse();
