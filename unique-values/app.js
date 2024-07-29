const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const categories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

const result = document.querySelector(".result");

result.innerHTML = categories.map((item) => {
  return `<button>${item}</button>`;
}).join('');
