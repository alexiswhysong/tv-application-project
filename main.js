//#region    Language Menu Toggle 

    var lang_btn = document.querySelector(".language-specifier");
    if(lang_btn){
        lang_btn.addEventListener("click", ()=> {
            document.querySelector(".language-menu").classList.toggle("show");
            document.querySelector("#lang-carret-icon").classList.toggle("bx-caret-up");
        })
    }

//#endregion 





//#region    Navbar Toggle 

    var menu_icon = document.querySelector(".left-nav i");
    var close_icon = document.querySelector("#nav-close");
    var navbar = document.querySelector(".navbar");

    menu_icon.addEventListener("click", ()=>{
        
        navbar.style.left = "0";

    })

    close_icon.addEventListener("click", ()=>{

        navbar.style.left = "-100%";

    })

//#endregion



