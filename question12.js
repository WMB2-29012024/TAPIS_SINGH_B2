function frequency(arr){
    obej = {};

    for(let i=0; i<arr.length;i++){
        if (obej[arr[i]]) {
            obej[arr[i]] += 1;
        }else{
            obej[arr[i]] = 1;
        }
    }
    return obej;
}

const arr= [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6];
console.log(frequency(arr));