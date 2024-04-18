var loginBox = document.getElementsByClassName("login")[0]
var signUpBox = document.getElementsByClassName("signup")[0]
var phone_main = document.getElementsByClassName("phone_main")[0]
var phone = document.getElementsByClassName("phone")[0]
var main_text = document.getElementsByClassName("main_text")[0]
function userLogin(){
      loginBox.style.display = "block"
     
}

function dellog(){
    loginBox.style.display = "none"
    
}

function userSignup(){
      signUpBox.style.display = "block"
      if (signUpBox.style.display = "block"){
        phone_main.style.display = "none"
        phone.addEventListener("mouseover", function(){
            phone.style.boxShadow = 'none'
        })
       

      } else {
        phone_main.style.display ="block"
        phone.addEventListener("mouseover", function(){
            phone.style.boxShadow = '10px 10px 10px 10px rgba(128, 128, 128, 0.715)'
        })
      }
}

function userClose(){
    signUpBox.style.display = "none"
    phone_main.style.display = "block"

}

main_text.addEventListener("mouseover", function(){
    main_text.style.boxShadow = '10px 10px 10px 10px rgba(128, 128, 128, 0.715)'
})

main_text.addEventListener("mouseout", function(){
    main_text.style.boxShadow = 'none'
})

phone.addEventListener("mouseover", function(){
    phone.style.boxShadow = '10px 10px 10px 10px rgba(128, 128, 128, 0.715)'
})

phone.addEventListener("mouseout", function(){
    phone.style.boxShadow = 'none'
})




// main_text.addEventListener("mouseover", function(){
//     main_text.style.boxShadow = '10px 10px 10px 10px rgba(128, 128, 128, 0.715)'
// })