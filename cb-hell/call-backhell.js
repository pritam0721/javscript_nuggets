// function  makeUpperCase(value) {
//     console.log(value.toUpperCase());

// }
// function reverseString(value) {
//     console.log(value.split('').reverse().join(''));

// }
// function handelName(name,cb) {
//     const fulllName = `${name} smith`;
//     cb(fulllName)
// }

// handelName('rahul',reverseString)
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
 setTimeout(() => {
     first.style.color= 'red';
 }, 1000);
 setTimeout(() => {
     second.style.color= 'green';
 }, 3000);
 setTimeout(() => {
     third.style.color= 'blue';
 }, 2000);
})
