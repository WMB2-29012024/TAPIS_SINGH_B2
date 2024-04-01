const input = document.getElementById("name");
const button = document.getElementById("button");
const ptag = document.getElementById("textLower");


input.addEventListener('change',(e)=>{
    let content = e.target.value;

    button.addEventListener('click', (e) =>{
        e.preventDefault();
        ptag.innerHTML = 'Hi '+content+'!';
        input.value="";
    })
})