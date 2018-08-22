function factorializeA(number){
  if (number === 0){
    return 1;
  }
  return number * factorializeA(number - 1);
}
let number = 5;
console.log(factorializeA(number));
