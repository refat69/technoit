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

var $grid = $(".grid").isotope({
  itemSelector: ".portfolio-item",
  layoutMode: "fitRows",
})
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text()
    return parseInt(number, 10) > 50
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text()
    return name.match(/ium$/)
  },
}
// bind filter button click
$(".filters-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter")
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue
  $grid.isotope({ filter: filterValue })
})
// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup)
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked")
    $(this).addClass("is-checked")
  })
})

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg")
var modalImg = document.getElementById("img01")
img.onclick = function () {
  modal.style.display = "block"
  modalImg.src = this.src
  captionText.innerHTML = this.alt
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none"
}
