const formElement = document.getElementById("signup-form");
const userName = document.getElementById("username");
const userEmail = document.getElementById("userEmail");
const submitBtn = document.getElementById('sign-up-btn');
const passwordEle = document.getElementById("password1");
const Con_passwordEle = document.getElementById("passwordAgain");
const pTagEle = document.getElementById("pTag");


formElement.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("name",userName.value);
    console.log("email",userEmail.value);
    // console.log("password",passwordEle.value);
    // console.log("conform password",Con_passwordEle.value);


    if(passwordEle.value ===Con_passwordEle.value){
        window.alert("form submitted");
    }else{
        pTagEle.innerText ="password are not similar";
        pTagEle.style.border = "2px solid red";
    }



});