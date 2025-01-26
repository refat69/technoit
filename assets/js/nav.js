const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled") 
  } else {
    navbar.classList.remove("scrolled") 
  }
})

document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear()
  document.getElementById("currentYear").textContent = currentYear
})
