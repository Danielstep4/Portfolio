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
