import Navbar from "./containers/Navbar.js"
import HeroSection from "./containers/HeroSection.js"
import Scroller from "./containers/Scroller.js"
import HowItWorks from "./containers/HowItWorks.js";
import Testimonials from "./containers/Testimonials.js";
import Features from "./containers/Features.js";
import Benefits from "./containers/Benefits.js";
import FAQs from "./containers/FAQs.js";
import GetStarted from "./containers/GetStarted.js";

try {
  document.getElementById("app").innerHTML = `
      <div class="relative sm:h-full flex flex-col">
        ${Navbar()}
        ${HeroSection()}
        ${Scroller()}
        <img src="/images/waves1.png" alt="waves" class="z-[-10] opacity-10 absolute top-0 right-0 "/>
        <img src="/images/waves2.png" alt="waves" class="z-[-10] opacity-25 absolute bottom-0 left-0 "/>
      </div>
      <div class="pb-20">
      ${Benefits()}
      ${Features()}
      ${Testimonials()}
      ${HowItWorks()}
      ${FAQs()}
      ${GetStarted()}
    </div>
  `;

  console.log("✅ app.js loaded and rendered");
} catch (error) {
  console.error("❌ Rendering error:", error);
  document.getElementById("app").innerHTML = `<pre style="color: red;">${error.message}</pre>`;
}

console.log("✅ app.js is loaded");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu && menuClose) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    menuToggle.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-button")) {
        document.querySelectorAll(".nav-button").forEach(btn => {
            btn.classList.remove("bg-primary", "text-secondary")
            btn.classList.add("text-primary")
        });

        e.target.classList.remove("text-primary")
        e.target.classList.add("bg-primary", "text-secondary")
        
    }
})

// In your JS file
const scrollContainer = document.querySelector('.benefit-scroll');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollContainer.classList.add('active');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  scrollContainer.scrollLeft = scrollLeft - walk;
});

