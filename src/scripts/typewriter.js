const roles = (window && window.__roles) ? window.__roles : [
  "Full-stack Developer",
  "React Native Specialist",
  "ASP.NET Web API Developer",
  "Mobile & Web Engineer"
];

const el = document.getElementById("typewriter");

let index = 0;
let charIndex = 0;
let deleting = false;

function type() {
  if (!el) return;

  const current = roles[index];

  if (!deleting) {
    el.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      index = (index + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? 60 : 90);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", type);
} else {
  type();
}
