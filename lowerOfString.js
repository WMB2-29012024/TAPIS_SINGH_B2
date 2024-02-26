const s = "LOVELY";
let toLowerCase = function(s) {
    let str ="";
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i) >=65 && s.charCodeAt(i)<=90){
            str = str+String.fromCharCode(s.charCodeAt(i)+32);
        }else{
            str = str+s[i];
        }
    }
    return str;
};
console.log(toLowerCase(s));