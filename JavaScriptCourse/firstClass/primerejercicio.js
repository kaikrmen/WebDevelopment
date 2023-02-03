var arr = [1, 2, "hola", null, undefined, "",  true, [3,7], 3.33, "JS", false];

console.log("---- MAP ----");
const arr2 = arr.map((x) => {
  if(typeof x == "number") {
    return x * 2;
  }
}).filter(Number)

console.log(arr2);