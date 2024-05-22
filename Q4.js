let ransomNote = "a", magazine = "b"
let ransomNote1 = "aa", magazine1 = "ab"
let ransomNote2 = "aa", magazine2 = "aab"

const fun = (s1,s2) =>{
    // for(let i=0; i<s2.length; i++){
    //     if(s1.charAt(i) === s2.charAt(i) && s1.length <= s2.length){
    //         return true;

    //     }else{
    //         return false;
    //     }
    // }
    
    const obj = {};


    for (let i = 0; i < s2.length; i++) {
        let ch = s2[i];
        if (obj[ch]) {
            obj[ch]++;
        } else {
            obj[ch] = 1;
        }
    }

    
    for (let i = 0; i < s1.length; i++) {
        let char = s1[i];
        if (!obj[char] || obj[char] === 0) {
            return false; 
        }
        obj[char]--;
    }

    return true;
}
console.log(fun(ransomNote,magazine));
console.log(fun(ransomNote1,magazine1));
console.log(fun(ransomNote2,magazine2));

