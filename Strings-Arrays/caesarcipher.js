function rot13(str){
  return str.split('')
            .map(function (char) {
              let x = char.charCodeAt(0);
              if (x < 65 || x > 90){
                return String.fromCharCode(x);
              } else if (x < 78){
                return String.fromCharCode(x+13);
              } else {
                return String.fromCharCode(x-13);
              }
            }).join('');
}

console.log(rot13('LBH QVQ VG!'))
