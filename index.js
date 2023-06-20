const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",navToggle);

function navToggle()
{    
    navToggler.classList.toggle("active");
    const nav= document.querySelector(".nav-links");
    const navbar = document.querySelector(".right-navbar");
    const navContainer = document.querySelector(".top-container");
    nav.classList.toggle("open");
    navContainer.classList.toggle("open");
    navbar.classList.toggle("open")

    if(nav.classList.contains("open"))
    {
        nav.style.maxHeight= nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
}
