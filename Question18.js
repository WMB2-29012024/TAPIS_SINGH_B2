// Branch Name: B2_W4_D5
      
/* Question 18: Write a for loop to find the factorial of a given number.
*/

const num = 5;

function fact(num){
    if (num ===0 || num === 1) {
        return 1;
    }
    let res =1;
    for(let i = 2; i<=num;i++){
        res *= i;
    }

    console.log(res);
}
fact(num);

