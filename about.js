document.addEventListener("DOMContentLoaded", () => {
  console.log("🎨 Team Showcase script initialized!");
});
const filterButtons = document.querySelectorAll(".filter-btn");
const memberCards = document.querySelectorAll(".member-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    memberCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});