// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

const strArr = "asdasdzxczxc";
function reverse(strArr){
    let rev = "";
    for(let idx = strArr.length-1; idx >=0;idx--){
        rev += strArr.charAt(idx);
    }
    console.log(rev);
}
reverse(strArr);
