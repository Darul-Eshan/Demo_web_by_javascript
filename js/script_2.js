window.addEventListener("DOMContentLoaded", () => {
    // const menuButton=document.querySelector(".menu_btn")
    // menuButton.forEach((btn) => {
    //     btn.addEventListener("click",(e)=>{});
        
    // });

    // const hero=document.getElementById("hero-section")

    // hero.style.opacity=0;
    // hero.style.transition="opacity 1s ease-out, transition 1s ease-out";
    // hero.style.transform = "translateY(20px)";

    // setTimeout(() => {
    //     hero.style.opacity=1
    //     heroContent.style.transform = "translateY(0px)";;
    // }, 200);


  const boxSlider = document.getElementById("slider");
  const speed = 1;
  let sliderWidth = boxSlider.scrollWidth;

  // Duplicate boxes for infinite loop
  

  let x = 0;

  function slide() {
    x -= speed;
    if (x <= -sliderWidth) {
      x = 0; // reset
    }
    boxSlider.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(slide); // call again
  }

  slide();



});