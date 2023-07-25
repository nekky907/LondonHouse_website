//SLIDE SHOW

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 


//GOOGLE MAP

function initMap() {
// Create a new map instance
  var map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 18.79322, lng: 98.98301 }, // Set the initial map center
  zoom: 15 // Set the initial zoom level
  });

// Create a marker for the location
 var marker = new google.maps.Marker({
  position: location,
  map: map,
  title: "London House School of Endlish" // Optional: Add a title for the marker
});
}
