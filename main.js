let shape = document.querySelector(".shape");
let circle = document.querySelector(".shape span ");
shape.addEventListener("click" , function(){
    if(!shape.classList.contains("active")){
        shape.style.cssText = "background-color:rgb(33, 143, 194)";
        circle.style.cssText = "background-color:white; right: 2px";
        shape.classList.add("active");
        circle.classList.add("active");
    }
    else{
        shape.style.cssText = "background-color:#bcb8b8"
        circle.style.cssText = "background-color:#999999; left: 2px";
        shape.classList.remove("active");
    }
})