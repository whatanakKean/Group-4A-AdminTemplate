const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode");
});

//# sourceMappingURL=login_register.9f4ba3e1.js.map
