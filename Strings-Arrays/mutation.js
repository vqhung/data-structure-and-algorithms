function mutationA(array){
  const str1 = array[0].split('');
  const str2 = array[1].split('');
  for(let i = 0; i < str2.length; i++){
    if(str1.indexOf(str2[i]) === -1){
      return false;
    }
  }
  return true;
}

function mutationB(array){
  const str1 = array[0].split('');
  const str2 = array[1].split('');

  return str2.every(function (char){
      return str1.indexOf(char) !== -1;
  });
}

console.log(mutationB(['Aline', 'line']));
