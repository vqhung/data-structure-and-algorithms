function chunkyArrayIntoGroupsA(array, num){
  let result = [];
  if (num <= array.length){
    while(array.length > 0){
      result.push(array.splice(0,num));
    }
  }
  return result;
}

function chunkyArrayIntoGroupsB(array, num = 1){
  let result = [];
  let count = 0;
  if (num <= array.length ){
    while (count <= array.length){
      result.push(array.slice(count,count+num));
      count += num;
    }
  }
  return result;
}

function chunkyArrayIntoGroupsC(array, num = 1){
  let temp = [];
  let result = [];
  for (let i=0; i < array.length; i++){
    if (i % num !== (num - 1)){
      temp.push(array[i]);
    } else {
      temp.push(array[i]);
      result.push(temp);
      temp = [];
    }
    }
    if (temp.length !== 0){
      result.push(temp);
  }
  return result;
}


array = [1, 2, 3, 4, 5];

console.log(chunkyArrayIntoGroupsC(array,3));
