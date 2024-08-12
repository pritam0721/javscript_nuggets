const products = [
    {
        "title": "Wireless Mouse"
    },
    {
        "title": "Mechanical Keyboard"
    },
    {
        "title": "USB-C Charger"
    },
    {
        "title": "Bluetooth Headphones"
    },
    {
        "title": "Gaming Monitor"
    },
    {
        "title": "Laptop Stand"
    },
    {
        "title": "Portable SSD"
    },
    {
        "title": "Ergonomic Chair"
    },
    {
        "title": "Smartphone Case"
    },
    {
        "title": "HDMI Cable"
    }
]


const text = 'mo';

const filteredProduct = products.filter((item)=> item.title.toLowerCase().includes(text))

console.log(filteredProduct);
