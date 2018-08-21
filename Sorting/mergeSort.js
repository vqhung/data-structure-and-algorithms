const { Compare, defaultCompare } = require('./utils');

function merge(left, right, compareFn = defaultCompare){
  let i = 0;
  let j = 0;
  let result = [];

  while(i < left.length && j < right.length){
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1){
    const { length } = array;
    const middle = Math.floor(length/2);

    const left = mergeSort(array.slice(0,middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }
  return array;
}

array = [8, 7, 6, 5, 4, 3, 2, 1];

console.log(mergeSort(array));
