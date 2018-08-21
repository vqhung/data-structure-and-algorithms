function reverseStringA(string){
  const wordArray = string.split('');
  const {length} = wordArray;
  let result = '';

  for(let i = length -1; i >=0; i--){
    result += wordArray[i];
  }
  return result;
}

function reverseStringB(string){
  return string.split('').reverse().join('');
}

string = "toi la ai ma tran gian the";
console.log(reverseStringA(string));
console.log(reverseStringB(string));
