const envelope = document.getElementById("envelope");
const cover = document.getElementById("cover");
const story = document.getElementById("story");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
  cover.style.display = "none";
  story.style.display = "block";

  music.volume = 0.4;
  music.play().catch(() => {});
});
