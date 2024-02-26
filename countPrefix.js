let words = ["pay","attention","practice","attend"];
let pref = "at";

let prefixCount = function(words, pref) {
    let count =0;
    for(let i=0; i<words.length; i++){
        let isprefix = true;
        for(let j=0; j<pref.length;j++){
            if(words[i][j] !== pref[j]){
                isprefix = false;
                break;
            }
        }

        if(isprefix){
            count++;
        }
    }
    return count;
};
console.log(prefixCount(words,pref));