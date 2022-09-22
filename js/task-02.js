const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const productContainer = document.querySelector('#ingredients');
const addClass = productContainer.classList.add('iteam');
for (let i = 0; i < ingredients.length; i += 1) {
  const itemsLi = document.createElement('li');
  itemsLi.textContent = ingredients[i];
  itemsLi.classList.add('item');
  productContainer.append(itemsLi);
  console.log(productContainer);
};
