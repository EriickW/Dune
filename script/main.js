const body = document.querySelector("body")
const nav = body.querySelector("nav")



function scroll(){
    if(window.scrollY > 0){
        nav.classList.add("scroll")

    }else{
        nav.classList.remove("scroll")
    }
}