function hasTargetSum(array, target) {
  // Write your algorithm here
//  for (let i=0; i<array.length; i++){
//   for (let j=i+1; j<array.length; j++){
//     const sum = array[i]+ array[j]
//     if(sum  === target){
//       return true
//     }
//   }
//  }

let found = false
  array.forEach((element, id) => { 
        for (let index = id+1; index < array.length; index++){
          const sum = element + array[index];
          if(sum  === target){
            found = true
            return
          }
       
        }
  }
  );
  return found
}

/* --------- another version with loop inside loop -------- */
function hasTargetSum2(array, target) {
 for (let i=0; i<array.length; i++){
  for (let j=i+1; j<array.length; j++){
    const sum = array[i]+ array[j]
    if(sum  === target){
      return true
    }
  }
 }
return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
