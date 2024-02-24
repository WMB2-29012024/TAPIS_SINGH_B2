// Branch Name: B2_W4_D5
      
/* Question 19: Write a for loop to find the sum of digits of a given number.
*/

const num = 12345;

function sumOFNUM(num){
    let sum =0;
    for(let i=num; i>0; i= Math.floor(i/10) ){
        sum += i % 10;
    }

    console.log(sum);


}
sumOFNUM(num);

