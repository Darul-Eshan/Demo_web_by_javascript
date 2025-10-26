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
    
  // if (heroContent) {
  //   heroContent.style.opacity = 0;
  //   heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  //   heroContent.style.transform = "translateY(20px)";

  //   setTimeout(() => {
  //     heroContent.style.opacity = 1;
  //     heroContent.style.transform = "translateY(0)";
  //   }, 200);
  // } else {
  //   console.warn("⚠️ hero-section not found in HTML!");
  // }

    // =========================
    const boxes=document.querySelectorAll("#boxes-section1 .box");

// boxes.forEach((box)=>{
//   box.style.opacity= 0;
//   box.style.transform="translateY(20px)"
//   box.style.transition="opacity 0.5s ease, transform 0.5s ease";

  // setTimeout(()=>{
  //   box.style.opacity=1;
  //   box.style.transform="translateY(0)";

  // },200)

//   box.addEventListener("mouseenter",()=>{
//     box.style.transform="scale(1.05)";
//     box.style.transition="transform 0.3s ease";

// });
// box.addEventListener("mouseleave", () => {
//     box.style.transform = "scale(1)";
//     box.style.transition = "transform 0.3s ease";

// });


    // boxes.forEach((box)=>{
    //     box.style.opacity=0;
    //     box.style.transform="translateY(20px)";
    //     box.style.transition="opacity 0.5s ease, transform 0.5s ease";

    //     setTimeout(()=>{
    //         box.style.opacity=1;
    //         box.style.transform="translateY(0)";

    //     },200);

    //     // scale up on hover

    //     box.addEventListener("mouseenter",()=>{
    //         box.style.transform="scale(1.05)";
    //         box.style.transition="transform 0.3s ease";
    //     });

    //     box.addEventListener("mouseleave", () => {
    //     box.style.transform = "scale(1)";
    //     box.style.transition = "transform 0.3s ease";
    // });
    // });
    // Slider setup
    const slider = document.querySelector('.team-slider');
    const slides = document.querySelectorAll('.team-card');
    const totalSlides = slides.length;
    let index = 0;
    let autoTimer = null;
    const AUTO_INTERVAL = 2500;

    function getCardWidth() {
      if (slides.length === 0) return 0;
      const rect = slides[0].getBoundingClientRect();
      const style = window.getComputedStyle(slides[0]);
      const ml = parseFloat(style.marginLeft) || 0;
      const mr = parseFloat(style.marginRight) || 0;
      return rect.width + ml + mr;
    }

    function moveSlider(toIndex = null) {
      if (!slider || slides.length === 0) return;
      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;
      const visibleCount = Math.max(1, Math.floor(slider.clientWidth / cardWidth));
      const maxIndex = Math.max(0, totalSlides - visibleCount);

      if (typeof toIndex === 'number') index = toIndex;
      if (index > maxIndex) index = 0;
      if (index < 0) index = maxIndex;

      const offset = -index * cardWidth;
      slider.style.transition = 'transform 0.5s ease';
      slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
      index++;
      moveSlider();
    }

    function prevSlide() {
      index--;
      moveSlider();
    }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(() => { index++; moveSlider(); }, AUTO_INTERVAL);
    }

    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    // wire up controls if present
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); stopAuto(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); stopAuto(); startAuto(); });

    // pause on hover and resume
    if (slider) {
      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);
      slides.forEach(s => { s.addEventListener('mouseenter', stopAuto); s.addEventListener('mouseleave', startAuto); });
      window.addEventListener('resize', () => { moveSlider(); });
      // initial position and start auto
      moveSlider(0);
      startAuto();
    }


    const newsContent = document.getElementById("news-cards"  );
    //  if (newsContent) {
    //     newsContent.style.opacity = 0;
    //     newsContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    //     newsContent.style.transform = "translateX(0px)";

    //     setTimeout(() => {
    //       newsContent.style.opacity = 1;
    //       newsContent.style.transform = "translateX(20px)";
    //     }, 200);
    //  }else{
    //   console.warn("⚠️ news-section not found in HTML!");
    //  }
     const allNews=document.querySelectorAll("#news-cards .news");
      allNews.forEach((news)=>{
        news.style.opacity = 0;
        news.style.transform = "translateY(20px)";
        news.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        
        setTimeout(()=>{
          news.style.opacity = 1;
          news.style.transform = "translateY(0)";
        
        },200);
        news.addEventListener("mouseenter",()=>{
          news.style.transform="scale(1.05)";
          news.style.transition="transform 0.3s ease";  });
        
        news.addEventListener("mouseleave", () => {
          news.style.transform = "scale(1)";
          news.style.transition = "transform 0.3s ease";});
      });

      // =================================================================================
      // ===================================================================================



  // slideshow code এখানে



     

// });
});
