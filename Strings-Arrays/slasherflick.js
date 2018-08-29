function slasherA(array, howMany){
  return array.slice(howMany);
}

function slasherB(array, howMany){
  array.splice(0,howMany);
  return array;
}

array = [1, 2, 3];
console.log(slasherB(array,2));
