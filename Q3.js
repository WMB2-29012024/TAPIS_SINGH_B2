let s = "egg", t = "add";
let s1 = "foo", t1 = "bar";
let s2 = "paper", t2 = "title";



const isIsomorphic = function(s, t) {
    // let obj_s = {};
    // let obj_t = {};

    // if(s.length !== t.length)return false;

    // for(let i=0; i< s.length; i++){
        
    //     if(obj_s[s[i]] ){
        
    //         if(obj_s[s[i]] !== t[i]){
                
    //             return false;
    //         }
    //         else{
    //             obj_s[s[i]] = t[i];
                                
    //         }
    //     }
        

    //     //for string --t
    //     if(obj_t[t[i]] ){
    //         if(obj_t[t[i]] !== s[i]){
    //             return false;
    //         }else{
    //             obj_t[t[i]] = s[i];
    //         }
    //     }

    //     return true;
    
    // }

    let obj_s = {};
    let obj_t = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check mapping from s to t
        if (obj_s[charS] !== undefined) {
            if (obj_s[charS] !== charT) {
                return false;
            }
        } else {
            obj_s[charS] = charT;
        }

        // Check mapping from t to s
        if (obj_t[charT] !== undefined) {
            if (obj_t[charT] !== charS) {
                return false;
            }
        } else {
            obj_t[charT] = charS;
        }
    }

    return true;
   
};

console.log(isIsomorphic(s,t));
console.log(isIsomorphic(s1,t1));
console.log(isIsomorphic(s2,t2));