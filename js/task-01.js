const numbOfCat = document.querySelectorAll('.item')
console.log(numbOfCat);
const category = document.querySelectorAll('h2')
console.log(category);
const elements = document.querySelector('.item  ul')

console.log(`Number of categories: ${numbOfCat.length}`);

category.forEach(item => {
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${item.nextElementSibling.querySelectorAll("li").length} \n `);
});



