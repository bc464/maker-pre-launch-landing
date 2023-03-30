const btn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const emailInput = document.querySelector(".email-input");

btn.addEventListener("click", (e)=> {
   
    if (emailInput.value === "") {
        e.preventDefault()
        emailInput.style.border = "1px solid #ff2965"
        errorMsg.innerHTML = "Oops! Please add your email"
    } else if (!emailInput.value.includes("@")) {
        e.preventDefault()
        emailInput.style.border = "1px solid #ff2965"
        errorMsg.innerHTML = "Oops! Please check your email"
    } else if (!emailInput.value.includes(".")) {
        e.preventDefault()
        emailInput.style.border = "1px solid #ff2965"
        errorMsg.innerHTML = "Oops! Please check your email"
    }
    else {
        emailInput.style.border = "none"
        emailInput.value = ""
        errorMsg.style.display = "none"
    }
})
