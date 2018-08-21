const {defaultCompare, Compare, swap} = require('./utils');

function bubleSort(array, compareFn = defaultCompare){
  const { length } = array;

  for (let i = 0; i < length; i++){
    for (let j = 0; j < length - 1; j++){
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN){
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

function improvedBubleSort(array, compareFn = defaultCompare){
  const { length } = array;

  for (let i = 0; i < length; i++){
    for (let j = 0; j < length - 1 - i; j++){
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN){
        swap(array, j, j+1);
      }
    }
  }
  return array;
}

module.exports = {
  bubleSort,
  improvedBubleSort
}

array = [5, 4, 3, 2, 1];

console.log(bubleSort(array));

console.log(improvedBubleSort(array));
