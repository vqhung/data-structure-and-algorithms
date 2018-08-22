function truncateStringA(string,num){
  let str = string.split('');
  if(str.length > num){
    return str.slice(0, str.length - num).join('') + '...';
  } else if (str.length < num){
    return str.join('');
  }
}


string = 'Orange';
console.log(truncateString(string,5));
