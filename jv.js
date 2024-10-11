document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".faq-list-intern section");
    const navLinks = document.querySelectorAll(".scroll-spy-anchor");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjust based on your header height
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });
  