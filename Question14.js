// Branch Name: B2_W4_D5
      
/* Question 14: Write a for loop to log elements that start with the letter "a".
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function fun(strArr){
    
    for (let i = 0; i < strArr.length; i++) {
        const firstChar = strArr[i][0];
        if (firstChar === "a") {
            console.log(strArr[i]);
        }
    }
    // for (const element of strArr) {
    //     if (element[0] === "a") {
    //         console.log(element);
    //     }
    // }
}
fun(strArr);