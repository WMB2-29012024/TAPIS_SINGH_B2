
var digitSum = function(s, k) {
    // while (s.length > k) {
    //      let newS = '';
    //      let groupSum = 0;
    //      for (let i = 0; i < s.length; i++) {
    //          // Accumulate the sum of digits in the current group
    //          groupSum += parseInt(s.charAt(i));
    //          // If the group size is reached or it's the last digit, add the sum to the new string
    //          if ((i + 1) % k === 0 || i === s.length - 1) {
    //              newS += groupSum;
    //              groupSum = 0; // Reset the group sum
    //          }
    //      }
    //      s = newS;
    //  }
    //  return s;

    while(s.length >k){
        let str ="";
        for(let i=0; i<s.length; i+=k){
            let sum =0;
            for(let j=i; j< s.length && j<i+k; j++){
                sum += Number(s[j]);
            }

            str += sum.toString(); 
        }
        s= str;

    }
    return s;
 };

// Test cases
console.log(digitSum("11111222223", 3)); // Output: "135"

