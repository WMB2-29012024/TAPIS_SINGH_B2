const myToUpperCase = (s) =>{
    let str ="";
    for(let i=0; i<s.length; i++){
        let charCode = s.charCodeAt(i);
        str = str+String.fromCharCode(charCode -32);
        console.log(charCode,str);
    }
    return str;
}