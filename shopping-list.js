// Going shopping

function shoppingList(str) {
    console.log("Shopping list solution");
    let obj = {};
    if (str.length === 0) {
        return obj;
    }
    else {
        let splitStr = str.split(",")
        for (let i = 0; i < splitStr.length; i++) {
            let parts = splitStr[i].split(" ").reverse();
            if (parts[1] == 0) {
                splitStr.pop(splitStr[i]);
            }
            else {
                obj[parts[0]] = Number(parts[1]);
            }
        } 
        return obj;
    }
}

console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));
console.log(shoppingList(""));
console.log(shoppingList("2 tomatoes, 1 egg, 0 pumpkins"));
