const toggle = document.querySelector(".nav__wrapper__toggle");
const ul = document.querySelector(".nav__wrapper__ul");

// add click event on toggle
if (toggle && ul) {
  toggle.addEventListener("click", () => {
    ul.classList.toggle("nav__active");
  });
}

// hero name
const nameElement = document.querySelector(".header__data__contents__heading");

if (nameElement) {
  nameElement.innerHTML = `
    <span class="hero-name-main">George</span>
    <span class="hero-name-accent">Magdy</span>
  `;
}

// open / close modal
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__wrapper__close");

// open modal
if (modalBtn && modal) {
  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

// close modal
if (modalClose && modal) {
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// get current year
const year = document.querySelector(".year");
if (year) {
  year.innerHTML = new Date().getFullYear();
}

// EmailJS Contact Form
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if (contactForm && toast) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    toast.textContent = "Sending email...";
    toast.classList.remove("error");
    toast.classList.add("show");

    emailjs
      .sendForm(
        "service_900fdcd",
        "template_w8kbrxm",
        contactForm,
        {
          publicKey: "HkhFrgFEWc4M0Yeja"
        }
      )
      .then(function () {
        toast.textContent = "Email was sent successfully";
        toast.classList.remove("error");
        toast.classList.add("show");

        setTimeout(function () {
          toast.classList.remove("show");
        }, 3000);

        contactForm.reset();
      })
      .catch(function (error) {
        toast.textContent = "Failed to send email. Please try again.";
        toast.classList.add("show", "error");

        setTimeout(function () {
          toast.classList.remove("show", "error");
        }, 4000);

        console.log("EmailJS Error:", error);
      });
  });
}

// Dark Mode
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  // Always open website in Light Mode by default
  document.body.classList.remove("dark-mode");
  themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  });
}