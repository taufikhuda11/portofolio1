// Typing Effect
const text = "Taufikul Huda";
let i = 0;

const typingElement = document.getElementById("typing");
typingElement.innerHTML = "";

function typing() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Scroll Animation & Navbar Active
const wrapper = document.querySelector(".wrapper");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

wrapper.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = wrapper.scrollTop;
    const offset = sec.offsetTop - 300;
    if (top > offset) {
      sec.classList.add("show");
    }
  });
});

wrapper.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (wrapper.scrollTop >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Navbar Click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Trigger awal
wrapper.dispatchEvent(new Event("scroll"));
