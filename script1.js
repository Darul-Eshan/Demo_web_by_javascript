// Wait until page loads fully
window.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 1️⃣ Header Menu Toggle
  // =========================
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  } else {
    console.warn("⚠️ menu-btn or nav-menu not found in HTML!");
  }

  // =========================
  // 2️⃣ Hero Section Fade-in
  // =========================
  const heroContent = document.getElementById("hero-section");

  if (heroContent) {
    heroContent.style.opacity = 0;
    heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroContent.style.opacity = 1;
      heroContent.style.transform = "translateY(0)";
    }, 200);
  } else {
    console.warn("⚠️ hero-section not found in HTML!");
  }

    // =========================
    const boxes=document.querySelectorAll("#boxes-section .box");

    boxes.forEach((box)=>{
        box.style.opacity=0;
        box.style.transform="translateY(20px)";
        box.style.transition="opacity 0.5s ease, transform 0.5s ease";

        setTimeout(()=>{
            box.style.opacity=1;
            box.style.transform="translateY(0)";

        },200);

        // scale up on hover

        box.addEventListener("mouseenter",()=>{
            box.style.transform="scale(1.05)";
            box.style.transition="transform 0.3s ease";
        });

        box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.style.transition = "transform 0.3s ease";
    });
    });

});
