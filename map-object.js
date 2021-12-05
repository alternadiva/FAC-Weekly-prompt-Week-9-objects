// Map Object

function mapObject(obj, fn) {
    console.log("Map Object solution");
    let newObj;
    let entries = Object.entries(obj);
    let mapEntries = entries.map((keyValue) => 
        [keyValue[0], fn(keyValue[1])]
        );
    newObj = Object.fromEntries(mapEntries);
    return newObj;
}


console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));
console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Yvonne'));

