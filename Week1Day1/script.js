
// /*this is just a practice
// of javaScript
// */


// // first line will set tweet to a value
// let tweet = "This is my first tweet";
// //this line will set likes to a value
// let likes = 10;
// //this line will set newLikes to a value
// let newLikes = likes + 2;
// //console logging newLikes to the console
// console.log(newLikes)



// const myCar = {
//   make: 'Toyota',
//   model: 'Prius',
//   hybrid: true,
//   avgMPG: 52,
//   upgrades:['Roof Rack', 'Leather seats'],
//   honk: function(){
//     console.log('Honk Honk')
//   }
// }

// const myArray = [5, 3, 8, 4];
// let sum = 0;

// for(let i = 0;i < myArray.length; i++){
//   sum = sum + myArray[i];
// }

// let average = sum / myArray.length;
// console.log(average)

const myNums = [5,4,8,4];
let sum = 0;
let i = 0;

while(i < myNums.length) {
  sum = sum + myNums[i];
  i++;
}

const average = sum / myNums.length;

console.log(Math.floor(average))