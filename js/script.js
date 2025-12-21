const envelope = document.getElementById("envelope");
const cover = document.getElementById("cover");
const story = document.getElementById("story");

envelope.addEventListener("click", () => {
  cover.style.display = "none";
  story.style.display = "block";
  window.scrollTo(0, 0);
});
