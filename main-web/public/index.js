function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
const toggleNavbar = () => {
      const navbar = document.querySelector(".navbar");
      const menuBtn =
        document.querySelector(".navbar__toggler").firstElementChild;
      
      if (navbar.className.includes("mobile-active")) {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
        navbar.classList.remove("mobile-active");
      } else {
        navbar.classList.add("mobile-active");
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
      }
};
