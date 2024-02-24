// Branch Name: B2_W4_D5
      
/* Question 13: Write a for loop to concatenate all elements into a single string.
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function fun(strArr){
    let str = "";
    for(let i=0; i<strArr.length;i++){
        str = str.concat(strArr[i]," ");
    }
    console.log(str);

}
fun(strArr);