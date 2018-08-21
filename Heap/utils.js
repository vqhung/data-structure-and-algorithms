const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const DOES_NOT_EXIST = -1;

function lesserEquals(a,b,compareFn){
  const comp = compareFn(a,b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALs;
}

function biggerEquals(a,b,compareFn){
  const comp = compareFn(a,b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALs;
}

function defaultCompare(a,b){
  if (a === b){
    return Compare.EQUALs;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b){
  [array[a], array[b]] = [array[b],array[a]];
}

module.exports = {
  Compare,
  defaultCompare,
  lesserEquals,
  biggerEquals,
  swap
}
