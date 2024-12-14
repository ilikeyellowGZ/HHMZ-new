const open = document.querySelector("nav .fa-bars");
const close = document.querySelector("nav .drop_down_menu .container .fa-times");
const dropDownContent  = document.querySelector(".drop_down_menu")

open.addEventListener('click', () => {
    open.style.display = "none";
    dropDownContent.style.transform = 'translate(0px)'; 
    open.classList.add("yes");
});

close.addEventListener('click', () => {
    open.style.display = "block";
    dropDownContent.style.transform = 'translate(-1000px)'; 
    open.classList.remove("yes");
});