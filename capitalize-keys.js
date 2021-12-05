// Capitalise keys

function capitaliseKeys(obj) {
    console.log("Capitalise keys solution");
    let newObj;
    let entries = Object.entries(obj);
    let mapEntries = entries.map((keyValue) => [keyValue[0].toUpperCase(), keyValue[1]]);
    newObj = Object.fromEntries(mapEntries);
    return newObj;
}

console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
console.log(capitaliseKeys({ Hello: "hi" }));
console.log(capitaliseKeys({}));