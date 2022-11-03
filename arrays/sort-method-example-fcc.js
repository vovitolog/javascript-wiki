// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].sort((a,b) => b-a)[0])
    }   
    return result;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // [ 5, 27, 39, 1001 ]