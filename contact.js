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