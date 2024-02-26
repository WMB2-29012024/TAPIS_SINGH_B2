let num =38;
function add_sum(num){
   
    let stringNum = String(num);
    if(stringNum === 1) return num;

    while(stringNum.length !==1){
        let sum =0 ;
        for(let i=0; i<stringNum.length;i++){
            sum += Number(stringNum[i]);

        }
        stringNum = String(sum);

    }
    return Number(stringNum);
}
console.log(add_sum(num));