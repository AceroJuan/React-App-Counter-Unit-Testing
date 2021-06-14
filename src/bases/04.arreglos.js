// arrays

const arr = [1, 2, 3, 4];

let arr2 = [...arr, 5];

const arr3 = arr2.map((num) => {
  return num * 2;
});

console.log("arr", arr);
console.log("arr2", arr2);
console.log("arr3", arr3);
