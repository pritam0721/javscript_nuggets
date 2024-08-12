const btn = document.querySelector('.btn')

const debounce = ()=>{
 let timeoutID ;
  return ()=>{
    console.log(timeoutID);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
    console.log('click me')}, 2000);
}
}

btn.addEventListener('click',debounce())
