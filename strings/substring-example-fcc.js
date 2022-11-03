//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    
    if (str.substring(str.length - target.length) === target) {    
      return true;
    }
    else return false;
  }
  
  console.log(  confirmEnding("Bastian", "n"));   

