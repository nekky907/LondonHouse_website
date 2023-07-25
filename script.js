
// Function to open the modal and embed the YouTube video
function openModal(videoUrl) {
  var modal = document.getElementById("videoModal");
  modal.style.display = "block";

  var videoIframe = document.createElement("iframe");
  videoIframe.setAttribute("src", videoUrl);
  videoIframe.setAttribute("width", "1060");
  videoIframe.setAttribute("height", "615");
  videoIframe.setAttribute("title", "YouTube video player");
  videoIframe.setAttribute("frameborder", "0");
  videoIframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
  videoIframe.setAttribute("allowfullscreen", "");

  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = ""; // Clear previous content
  modalContent.appendChild(videoIframe);
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("videoModal");
  modal.style.display = "none";

  var modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "";
}

// Event listener for video links
var videoLinks = document.getElementsByClassName("image-button");
for (var i = 0; i < videoLinks.length; i++) {
  videoLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var videoUrl = this.getAttribute("data-video-url");
    openModal(videoUrl);
  });
}

// Event listener to close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  var modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeModal();
  }
});




