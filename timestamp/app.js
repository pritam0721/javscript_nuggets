console.log(new Date());


const firstDate  = new Date().getTime();
const secondDate = new Date("2024-09-11").getTime();

const timeDiffarance = secondDate - firstDate
console.log(timeDiffarance);

const remaningminutes = timeDiffarance / (1000 * 60 )
console.log(remaningminutes);
const hours = remaningminutes / 60 ;
console.log(hours);
const days = hours / 24 ;
console.log(Math.floor(days));
