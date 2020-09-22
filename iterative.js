'use strict';

//ONE//
function countSheep (num){
  for( let i =0; i< num ; i++){
    console.log(`${num-i} : Another sheep jumps oner the fence`)
  }
  console.log('All sheep jumped over the fence');
}

//TWO//
function powerCalculator (base, exponent) {
  if (exponent >= 0) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  return 'exponent should be >= 0';
  // return Math.pow(base, exponent);
}


//TESTING ZONE//

countSheep(3);
console.log(powerCalculator(5, 3));