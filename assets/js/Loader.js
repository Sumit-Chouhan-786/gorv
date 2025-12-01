document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const body = document.body;

  // Lock scroll
  body.style.overflow = "hidden";

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
        body.style.overflow = "auto";
      }, 100);
    }, 1200); 
  });
});
