const { Compare, defaultCompare, swap } = require('./utils');

function selectionSort(array, compareFn = defaultCompare){
  const { length } = array;

  for (let i = 0; i < length; i++){
    let indexMin = i;
    for (let j = i + 1; j < length; j++){
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN){
        indexMin = j;
      }
      if (i !== indexMin){
        swap(array, i, indexMin);
      }
    }
  }
  return array;
}

array = [5, 4, 1, 2, 3,7];

console.log(selectionSort(array));
