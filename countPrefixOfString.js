let words = ["a","b","c","ab","bc","abc"];
let s = "abc";
let countPrefixes = function(words, s) {
    let count =0;
    for(let i=0; i<words.length; i++){
        let isprefix = true;
        let word = words[i];
        for(let j=0; j<word.length;j++){
            if(word[j] !== s[j] ){///words[i][j] !== s[j]
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
console.log(countPrefixes(words,s));