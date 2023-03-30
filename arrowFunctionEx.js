// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }


(arr) => arr.map(val => val * 2);


const squareAndFindEven = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)

  
  