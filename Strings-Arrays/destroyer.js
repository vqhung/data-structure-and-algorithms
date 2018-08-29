function destroyer(arr, arr1){
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr1.length; j++){
      if (arr1[j] === arr[i]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

function destroyerB(arr, arr1){
  return arr.filter(function (item){
    return arr1.indexOf(item) === -1;
  });
}

let initialArr = [11, 23, 83, 41, 95, 36, 77, 81, 90];
let newArr = [11, 33, 88, 41, 77, 8, 4, 10];

let result = destroyerB(initialArr, newArr);
console.log(result);
