const navbar = document.getElementById("navbar")

// Add a scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled") // Add the class when scrolled down
  } else {
    navbar.classList.remove("scrolled") // Remove the class when at the top
  }
})
