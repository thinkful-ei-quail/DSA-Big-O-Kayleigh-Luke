'use strict';

//ONE//
function countSheep (num){
  for( let i =0; i< num ; i++){
    console.log(`${num-i} : Another sheep jumps oner the fence`);
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

//THREE//
function reverseString (str){
  let result = '';
  for (let i = str.length - 1; i >= 0; i-- ){
    result += str[i];
  }
  console.log(result);
}

//FOUR//
function nthTriangular (num) {
  if (num >= 1 && (num - Math.floor(num) === 0) && typeof num === 'number') {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    console.log(result);
  } else {
    console.log('please use a valid num');
  }
}

//FIVE//
function stringSplitter( str, sep){
  let result = [];
  let start = 0;
  for (let i = 0; i< str.length; i++){
    if ( str[i] === sep){
      result.push(str.slice(start, i));

      start= i+1;
    }
  }
  result.push(str.slice(start));
  console.log(result);
}

//SIX//
function fibonnaciSequence (num) {
  let prevNum = 0;
  let tempNum = 0;
  let currNum = 1;
  for (let i = 0; i < num; i++) {
    console.log(currNum + ', ');
    prevNum = currNum;
    currNum += tempNum;
    tempNum = prevNum;
  }
}

//TESTING ZONE//

countSheep(3);
console.log(powerCalculator(5, 3));
reverseString('hello goodbye!');
nthTriangular(3);
stringSplitter('02/20/2020','/');
fibonnaciSequence(6);