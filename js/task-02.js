const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const container = document.createDocumentFragment()
const creatFun = ingredients.forEach(element => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = element;
  container.append(listItem);
});

list.append(container)


