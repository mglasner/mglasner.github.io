const button = document.getElementById("toggle-theme-button");

button.addEventListener("click", () => {

  let navbar = document.getElementById("myNavbar");
  let footer = document.getElementById("myFooter");

  navbar.classList.toggle("bg-light");
  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("navbar-light");
  navbar.classList.toggle("navbar-dark");
  footer.classList.toggle("bg-light");
  footer.classList.toggle("bg-dark");
  footer.classList.toggle("navbar-light");
  footer.classList.toggle("navbar-dark");

  if (navbar.className.includes("navbar-light")) {
    document.body.style.backgroundColor = "#F8F9FA";
    button.src = "./images/moon-icon.svg"
  } else {
    document.body.style.backgroundColor = "#C7C8C9";
    button.src = "./images/sun-color-icon.svg"
  }
});
