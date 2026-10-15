const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("is-open", !expanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  }
});

let bagCount = 0;
const bagButton = document.querySelector(".bag-button");
const bagCountLabel = document.querySelector(".bag-count");

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    bagCount += 1;
    bagCountLabel.textContent = String(bagCount);
    bagButton.setAttribute("aria-label", `Shopping bag, ${bagCount} ${bagCount === 1 ? "item" : "items"}`);
    button.textContent = "✓";
    button.setAttribute("aria-label", "Added to bag");
  });
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector(".form-message");

  if (!email.validity.valid) {
    email.reportValidity();
    return;
  }

  message.textContent = "Thanks for being here. You’re on the list.";
  form.reset();
});
