let button = document.getElementById("toggle-theme-button");

button.addEventListener("click", () => {
  let navbar = document.getElementById("myNavbar");
  let youtubeVideo = document.getElementById("youtube-video");

  navbar.classList.toggle("bg-light");
  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("navbar-light");
  navbar.classList.toggle("navbar-dark");

  youtubeVideo.classList.toggle("bg-light");
  youtubeVideo.classList.toggle("bg-dark");
  youtubeVideo.classList.toggle("text-dark");
  youtubeVideo.classList.toggle("text-light");

  if (navbar.className.includes("navbar-light")) {
    button.innerHTML =
    button.src = "./images/moon-icon.svg"
  } else {
    button.innerHTML =
    button.src = "./images/sun-color-icon.svg"
  }
});
