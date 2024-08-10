const heading = document.querySelector('.heading');
// console.log(heading);

const listItems = document.querySelectorAll('.list-item');


const getElement = (selector,isList)=>{
    const el = isList?[...document.querySelectorAll(selector)]:document.querySelector(selector);
     if((!isList && el) || (isList && !el.length < 1)) return el;
     throw new Error(`the selected element ${selector} is not exist`);
}

console.log(getElement('.list-item', true));
