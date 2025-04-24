// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menu toggle di klik
document.querySelector("#menu-toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu-toggle");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
