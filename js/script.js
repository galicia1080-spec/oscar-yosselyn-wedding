const envelope = document.getElementById("envelope");
const cover = document.getElementById("cover");
const story = document.getElementById("story");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
  // 1. Iniciar música (navegadores requieren interacción del usuario)
  if (music) {
    music.volume = 0.5;
    music.play().catch((error) => {
      console.log("Autoplay bloqueado o error: ", error);
    });
  }

  // 2. Transición visual
  cover.classList.add("hidden"); // Activa el CSS opacity: 0

  // Esperamos 1 segundo (lo que dura la transición CSS) antes de quitarlo del DOM
  setTimeout(() => {
    cover.style.display = "none";
    story.style.display = "block";
    
    // Pequeño delay para que el story haga fade-in
    setTimeout(() => {
      story.style.opacity = "1";
    }, 50);
    
  }, 1000);
});
