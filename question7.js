// const str ="asdasdzxczxc";
// for(let num = str.length-1; num>=0; num--){
//     console.log(str[num]);
// }

function reverseStr(str){
    let reverse = "";
    for(let num = str.length-1; num>=0; num--){
        reverse += str[num]; 
    }
    console.log({reverse});
    return reverse;
}
reverseStr("asdasdzxczxc");