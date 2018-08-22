function titleCaseASentenceA(string){
  let wordArray = string.split(' ');
  const {length} = wordArray;

  for (let i = 0; i < length; i++){
    let beginningLetter = wordArray[i].charAt(0).toUpperCase();
    wordArray[i] = beginningLetter + wordArray[i].slice(1);
  }

  return wordArray.join(' ');
}

function titleCaseASentenceB(string){
  let wordArray = string.split(' ');
  const {length} = wordArray;

  for (let i = 0; i < length; i++){
    let charArray = wordArray[i].split('');
    charArray[0] = charArray[0].toUpperCase();
    wordArray[i] = charArray.join('');
  }
  return wordArray.join(' ');
}

string = 'Toi la ai ma tran gian the';
console.log(titleCaseASentenceB(string));
