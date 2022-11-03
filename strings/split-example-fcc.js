// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
    let strings = str.split(' ')
    let maximum = 1;
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > maximum) maximum = strings[i].length; 
    }
     console.log(strings)
     return maximum;
   }
   
   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
   console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
