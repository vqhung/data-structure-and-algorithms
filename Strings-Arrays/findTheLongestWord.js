function findTheLongestWordA(string){
  const wordArray = string.split(' ');
  let maxLength = 0;
  for (let i = 0; i < wordArray.length; i++){
    let count = wordArray[i].length;
    if (count > maxLength){
      maxLength = count;
    }
  }
  return maxLength;
}

function findTheLongestWordB(string){
  const wordArray = string.split(' ');

  return wordArray.reduce(function (a, b){
    return Math.max(a, b.length);
  },0);
}

string = "Toi la ai ma tran gian the nghieng";

console.log(findTheLongestWordA(string));
console.log(findTheLongestWordB(string));
