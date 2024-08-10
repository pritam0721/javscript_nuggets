const u = "udemy";
let letters = [...u]
console.log(letters);

console.log(Array.from(u));
const items = Array.from({length:120},(_,index)=>{
 return index
})
const itemsPerpage = 14;
const pages = Math.ceil(items.length/itemsPerpage)

const newItems = Array.from({length:pages},(_,index)=>{
    const start = index * itemsPerpage;
    const tempItems = items.slice(start,start+itemsPerpage)
    return tempItems
})
//log
console.log(newItems);
