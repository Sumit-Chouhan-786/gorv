/*---------------- MOBILE MENU HANDLER ----------------*/
const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navbarNav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");

    // toggle collapse
    const bsCollapse = new bootstrap.Collapse(navBar, {
        toggle: false
    });

    if (menuBtn.classList.contains("active")) {
        bsCollapse.show();
        document.body.classList.add("no-scroll");
    } else {
        bsCollapse.hide();
        document.body.classList.remove("no-scroll");
    }
});



// dynmic year
 document.getElementById("year").textContent = new Date().getFullYear();



  const texts = [
    "Welcome to Fiesta PR Agency",
    "We Build Your Brand Visibility",
    "Creative PR & Digital Strategy"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const speed = 80;       
  const eraseSpeed = 40;  
  const delay = 1500;    

  function typeEffect() {
    const element = document.getElementById("typing-text");
    if (charIndex < texts[textIndex].length) {
      element.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(eraseEffect, delay);
    }
  }

  function eraseEffect() {
    const element = document.getElementById("typing-text");
    if (charIndex > 0) {
      element.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, eraseSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length; // next text
      setTimeout(typeEffect, 300);
    }
  }

  window.onload = typeEffect;
