// Branch Name: B2_W4_D5
      
/* Question 21: Write a for loop to find the sum of all odd numbers between 1 and a given number.
*/

const num = 10;

function sumOdd(num){
    let sum =0; 
    for(let i =1;i<=num;i++){
        if(i%2 !==0){
            sum += i;
        }
    }
    console.log(sum);
}
sumOdd(num);