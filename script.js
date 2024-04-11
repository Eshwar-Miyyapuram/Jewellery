document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-content");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    images.forEach(image => {
      image.addEventListener("click", function() {
        const imgSrc = this.querySelector("img").src;
        const imgAlt = this.querySelector("img").alt;
        const imgTitle = this.getAttribute("data-title");
  
        lightbox.style.display = "block";
        lightboxImg.src = imgSrc;
        captionText.innerHTML = imgTitle;
      });
    });
  
    closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
    });
  });