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




    