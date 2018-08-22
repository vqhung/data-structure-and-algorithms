function confirmEnding(string, target){
  let wordArray = string.split('')
  let targetArray = target.split('');

  return wordArray.slice(wordArray.length-targetArray.length).join('') === targetArray.join('');
}

string = 'toi la ai ma tran gian the';
console.log(confirmEnding(string,'the'));
