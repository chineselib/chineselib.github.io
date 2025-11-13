// slideshow.js - very small slideshow used by news.html
document.addEventListener('DOMContentLoaded', function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  let idx = 0;
  function show(i){
    slides.forEach((s,si)=> s.classList.toggle('active', si===i));
    dots.forEach((d,di)=> d.classList.toggle('active', di===i));
  }
  if(slides.length){
    show(0);
    setInterval(()=> { idx = (idx+1)%slides.length; show(idx); }, 5000);
    window.plusSlides = function(n){ idx = (idx + n + slides.length) % slides.length; show(idx); }
    window.currentSlide = function(n){ idx = (n-1+slides.length)%slides.length; show(idx); }
  }
});
