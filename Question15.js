// Branch Name: B2_W4_D5
      
/* Question 15: Write a for loop to log elements that end with the letter "e"
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function fun(strArr){
    let arr =[];
    for(let i =0; i<strArr.length; i++){
        let last = strArr[i].length-1;
        
        if(strArr[i][last] === 'e'){
            console.log(strArr[i]);
            arr.push(strArr[i]);
        }
    }
    console.log(arr);
}
fun(strArr);

