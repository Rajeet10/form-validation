console.log("FORMS");
const nam=document.getElementById('name');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
let validusername=false;
let validphone=false;
let validemail=false;
nam.addEventListener('blur',()=>{
    console.log("USERNAME BLURRED");
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}/;
    let str=nam.value;
    if(regex.test(str)){
        console.log("Name is valid");
        nam.classList.remove('is-invalid')
        validusername=true;
    }else{
        console.log("name is not valid");
        nam.classList.add('is-invalid');
        validphone=false;
    }
})

phone.addEventListener('blur',()=>{
    console.log("PHONE BLURRED");
    let regex=/^[0-9]{10}/;
    let str=phone.value;
    if(regex.test(str)){
        console.log("PHONE NO is valid");
        phone.classList.remove('is-invalid');
        validphone=true;
    }else{
        console.log("PHONE NO is not valid");
        phone.classList.add('is-invalid')
        validphone=false;
    }
})

email.addEventListener('blur',()=>{
    console.log("BLURRED");
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    if(regex.test(str)){
        console.log("Email is valid");
        email.classList.remove('is-invalid')
        validemail=true;
    }else{
        console.log("Email is not valid");
        email.classList.add('is-invalid')
        validemail=false;
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("YOU CLICKED THE SUBMIT BUTTON");
    if(validemail && validphone && validusername){
        console.log("EVERY DETAIL VALID>FORM SUBMITTED");
        let success=document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }else{
        console.log("Username,Phone,Email not valid>please correct it");
        let failure=document.getElementById("failure");
        failure.classList.add('show')
        success.classList.remove('show'); 
    }
    
})