const container = document.querySelector(".container"),
      pwshowhide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");


pwshowhide.forEach(eyeIcon =>{
   eyeIcon.addEventListener("click", ()=>{
    pwFields.forEach(pwField =>{
        if (pwField.type ==="password"){
            pwField.type = "text";
        }else{
            pwField.type = "password";
        }
    })
   })
})
