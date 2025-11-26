document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const body = document.body;

  // Prevent scrolling while preloader is visible
  body.style.overflow = "unset";

  setTimeout(() => {
    // Fade out preloader
    preloader.style.opacity = "0";

    setTimeout(() => {
      // Hide preloader completely
      preloader.style.display = "none";

      // Restore scrolling
      body.style.overflow = "auto";
    }, 500); // fade-out duration
  }, 0); // wait 3 seconds
});
