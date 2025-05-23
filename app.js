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
      <div class="h-full flex flex-col">
        ${Navbar()}
        ${HeroSection()}
        ${Scroller()}
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

