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
      }, 500);
    }, 2000); // small delay for smooth finish
  });
});
