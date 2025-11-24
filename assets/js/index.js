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


// hero slider
 const heading = document.getElementById("mainHeading");

    const swiper = new Swiper(".heroSwiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        on: {
            init() {
                updateHeading(this.slides[this.activeIndex]);
            },
            slideChange() {
                updateHeading(this.slides[this.activeIndex]);
            }
        }
    });

    function updateHeading(slide) {
        const text = slide.getAttribute("data-title");

        heading.style.animation = "none";
        void heading.offsetWidth; // restart animation
        heading.style.animation = "fadeUp 0.8s forwards";

        heading.innerHTML = text;
    }