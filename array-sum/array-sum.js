function arraySum(arr) {
  const sum = 0;
  const slicedArray = arr.slice();
  const dimension = 3;
  const flatArray = slicedArray.reduce((acc, val) => acc.concat(val), []);

  for (var i = 0; i < dimension; i++) {
    flatArray = flatArray.reduce((acc, val) => acc.concat(val), []);
  }

  flatArray.forEach((element) => sum += element)
  return sum;
}

console.log(arraySum([1, 2, [3, 4, [5]]]));




function sumArray(arr) {
  const one = arr.join("");
  const splt = one.split(" ");
  return one;

}

sumArray([1, 2, [3, 4, [5]]]);

function removearr(arr) {
  const emptyArr = [];
  arr.forEach((i) => {
    if (!Array.isArray(i)) {
      //  i.forEach(element=>emptyArr.push(element));
      emptyArr.push(i);
    } else if (Array.isArray(i)) {
      return removearr(i);
    }
  });
  return emptyArr;
}
console.log(removearr([1, 2, [3, 4, [5]]]));


function removearr(arr) {
  const slicedArray = arr.slice();
  const flatArray = slicedArray.reduce((acc, val) => acc.concat(val), []);

  return slicedArray;
}
  
console.log(removearr([1, 2, [3, 4, [5]]]));
