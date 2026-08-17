document.addEventListener("DOMContentLoaded", () => {
  console.log("📧 Contact Page JS successfully loaded!");
});
const messageInput = document.getElementById("message");
const charCountSpan = document.getElementById("charCount");

if (messageInput && charCountSpan) {
  messageInput.addEventListener("input", (e) => {
    const length = e.target.value.length;
    charCountSpan.textContent = length;
    
    if (length >= 180) {
      charCountSpan.style.color = "var(--accent-pink)";
    } else {
      charCountSpan.style.color = "var(--accent-purple)";
    }
  });
}
const contactForm = document.getElementById("contactForm");
const toastContainer = document.getElementById("toastContainer");

const showToast = (msg) => {
  if (!toastContainer) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <div>${msg}</div>`;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("fullName").value;
    
    showToast(`Thank you, ${name}! Your feedback has been recorded successfully.`);
    contactForm.reset();
    if (charCountSpan) charCountSpan.textContent = "0";
  });
}