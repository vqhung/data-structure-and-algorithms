function palindromeCheckerA(string){

  let str = string.toLowerCase();

  return str === str.split('').reverse().join('') ? true : false;
}

function palindromeCheckerB(string){

}

console.log(palindromeChecker('Eye'));
