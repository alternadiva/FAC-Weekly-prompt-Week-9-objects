// String to object

function stringToObject(str) {
    console.log("String to object solution");
    let obj = {};
    if (str.length === 0) {
        return obj;
    }
    else {
        let splitStr = str.split(",");
        for (let i = 0; i < splitStr.length; i++) {
            let parts = splitStr[i].split(':');
            obj[parts[0]] = parts[1];
        }
        return obj;
    }
}

console.log(stringToObject(""));
console.log(stringToObject("a:1,b:2,c:3"));
console.log(stringToObject("one:-1,two:hi there,three:what's that?"));