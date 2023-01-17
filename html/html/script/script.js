let btn = document.querySelector(".burger-btn");
btn.addEventListener("click", () => {
  let navlink = document.querySelector(".nav-bar__links");
  navlink.className = "nav-links__mobile";
  let cls = document.createElement("div");
  cls.innerHTML = "X";
  cls.className = "cls";
  navlink.appendChild(cls);
  cls.addEventListener("click", () => {
    navlink.removeChild(cls);
    navlink.className = "nav-bar__links";
  });
});

// conatct form validator
let contactForm = document.querySelector(".contact-container__form");
//email validator function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};





contactForm &&
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector(".contact-container__form #fname");
    let email = document.querySelector(".contact-container__form #mail");
    console.log()
    let phone = document.querySelector(".contact-container__form #pnum");
    
    let message = document.querySelector(".contact-container__form #message");


    console.log(email)
    if (
      name.value === "" ||
      name.value === null ||
      /\d/.test(name.value) ||
      /[^a-zA-Z0-9 ]/.test(name.value)
    ) {
      name.value = "invalid name";
      name.style.color="rgba(0,0,0,0.2)"
      name.style.border = "1px solid red";
    } else {
      name.style.border = "1px solid black";

    }
    

    if (validateEmail(email.value)) {
      email.style.border = "1px solid black";
    } else {
      email.value = "invalid email";
      email.style.color="rgba(0,0,0,0.2)"
      email.style.border = "1px solid red";
    }
    




    if (phone.value===null || phone.value==="" || /[^a-zA-Z0-9 ]/.test(phone.value)){
      phone.style.border="1px solid red"
      phone.style.color="rgba(0,0,0,0.2)"
    }
    else{
      phone.style.border="1px solid black"
     

    }



    if (message.value === null || message.value === "") {
      message.value = "Please place your comment";
      message.style.border = "1px solid red";
      message.style.color="rgba(0,0,0,0.2)"
    } else {
      message.style.border = "1px solid black";
      // form cleared
      setTimeout(() => {
        email.value = "";
        phone.value=""
        name.value = "";
        message.value = "";
        email.style.border ="1px solid black";
        phone.style.border="1px solid black"
        name.style.border ="1px solid black";
        message.value = ""
      email.style.color="black"
      name.style.color="black"
      message.style.color="black"

      }, 2000);
    }
  

  




  });





  // login valid

  let loginForm=document.querySelector(".login-container__form")
  loginForm && loginForm.addEventListener("submit",(e)=>{
   e.preventDefault()
   let email = document.querySelector(".login-container__form #email");
   let pass = document.querySelector(".login-container__form #pass");

   if (validateEmail(email.value)) {
    email.style.border = "1px solid black";
  } else {
    email.value = "invalid email";
    email.style.color="rgba(0,0,0,0.2)"
    email.style.border = "1px solid red";
  }
  if (pass.value===null || pass.value===null || pass.value.length<8){
    pass.value = "invalid pass";
    pass.style.color="rgba(0,0,0,0.2)"
    pass.style.border = "1px solid red";
  }

    // form cleared
    setTimeout(() => {
      email.value = "";
      pass.value=""
      email.style.color="black"
      pass.style.color="black"
      email.style.border ="1px solid black";
      pass.style.border="1px solid black"
    }, 2000);

  })
