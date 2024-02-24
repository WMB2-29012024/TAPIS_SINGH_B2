// Branch Name: B2_W4_D5
      
/* Question 23: Write a for loop to find the median of elements in an array.
*/

const arr = [1, 3, 2, 4, 5, 6];

function medianOfArr(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

        }
    }
    let median;
    let middleIdx = Math.floor(arr.length/2);


    if (arr.length%2 ===0) {
        median = (arr[middleIdx-1] + arr[middleIdx])/2;

    }else{
        median = arr[middleIdx];
    }
    console.log(median);

    
}
medianOfArr(arr);