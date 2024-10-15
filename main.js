function from1ToN(n){   
    if(n === 1){
        return n;
    }
    console.log(n)
    return from1ToN(n-1);
}
// console.log(from1ToN(5))


function fromAtoB(a, b){
    if(a === b){
        return a;
    }else if(a > b){
        console.log(a)
        return fromAtoB(a-1, b);
    }else if(a < b){
        console.log(a)
        return fromAtoB(a+1, b);
    }
}
// console.log(fromAtoB(1, 5))


function sumOfNumber(N) {
    if (N === 0) {
      return 0;
    }
    return (N % 10) + sumOfNumber(Math.floor(N / 10));
  }
// console.log(sumOfNumber(179));


function exactDegreeOf2(n){
    if (n === 1) {
        return "YES";
      }
      if (n % 2 !== 0 || n < 1) {
        return "NO";
      }
      return exactDegreeOf2(n / 2);
}
// console.log(exactDegreeOf2(18));


function printNumbersReversed(N) {
    console.log(N % 10);
    if (N >= 10) {
      printNumbersReversed(Math.floor(N / 10));
    }
  }
// printNumbersReversed(1234);


function printNumbers(N) {
    if (N >= 10) {
      printNumbers(Math.floor(N / 10));
    }
    console.log(N % 10);
  }
printNumbers(1234);
