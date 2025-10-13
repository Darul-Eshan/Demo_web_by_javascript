const menuBtn=document.getElementById("menu-btn");


// menuBtn.addEventListener("click",()=>{
// menuBtn.classList.toggle("open"),
// menu.classList.toggle("hidden"),
// menu.classList.toggle("flex")});

const navMenu=document.getElementById("nav-menu");

menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("hidden")});

// toggle menu on button clike

menuBtn.addEventListener('click',() =>
{
    
    if(navMenu.style.display==='block'){
        navMenu.style.display='none';
    } else{
        navMenu.style.display='block';
    }
})
window.addEventListener('DOMContentLoaded',()=>{
    const heroContent=document.getElementById("hero-section");

    heroContent.style.opacity=0;


    let opacity=0;
    const fadeIn=setInterval(()=>{
        if(opacity>=1){
        opacity+=0.02;
        heroContent.style.opacity=opacity;
    } else{
        clearInterval(fadeIn);  
        }
    },20);
})