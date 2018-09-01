function telephoneCheck(str){
    let regEx = /(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regEx.test(str);
}

console.log(telephoneCheck('555-555-5555'));
console.log(telephoneCheck('(555)-555-5555'));
console.log(telephoneCheck('5555555555'));
console.log(telephoneCheck('555 555 5555'));
console.log(telephoneCheck('555_555_5555'));