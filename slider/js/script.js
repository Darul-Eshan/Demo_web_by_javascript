
document.addEventListener("DOMContentLoaded", () => {
  // slideshow code এখানে
  const slideshowElements = 
document.querySelectorAll("#slideshow > div");
 let index = 0;


setInterval(() => {
   
    slideshowElements[index].classList.remove("opacity-100", "scale-100");
    slideshowElements[index].classList.add("opacity-0", "scale-0");
     index = (index + 1) %  slideshowElements.length;
       slideshowElements[index].classList.remove("opacity-0", "scale-0");
         slideshowElements[index].classList.add("opacity-100", "scale-100");

}, 2000);
});