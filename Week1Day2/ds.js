// a = 25;
// a = a - 13;
// console.log(a/2)

// a = 'Hello'
// console.log(`${a} Hello`)

function getTotal(arrayOfNumbers){
  var sum = arrayOfNumbers[0];

  for(var i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
    console.log('sum is:' + sum)
  }


}