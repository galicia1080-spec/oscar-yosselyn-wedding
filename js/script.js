document.addEventListener('DOMContentLoaded', () => {
    
  // --- 1. LÓGICA DEL SOBRE ---
  const envelope = document.getElementById("envelope");
  const cover = document.getElementById("cover");
  const story = document.getElementById("story");
  const music = document.getElementById("music");

  if (envelope) {
    envelope.addEventListener("click", () => {
      // Intentar reproducir música
      if (music) {
        music.volume = 0.5;
        music.play().catch((error) => {
          console.log("Autoplay bloqueado (normal en móviles): ", error);
        });
      }

      // Animación de salida del sobre
      cover.classList.add("hidden"); 
      
      // Esperar 1 segundo y mostrar la historia
      setTimeout(() => {
        cover.style.display = "none";
        story.style.display = "block";
        
        // Pequeño delay para el fade-in
        setTimeout(() => {
          story.style.opacity = "1";
        }, 50);
      }, 1000);
    });
  }

  // --- 2. LÓGICA DE LA CUENTA REGRESIVA ---
  const daysEl = document.getElementById("days");
  
  if (daysEl) {
    // FECHA DE LA BODA: 28 de Marzo de 2026 a las 3:00 PM
    // (Año, Mes [0=Enero, 2=Marzo], Día, Hora, Minuto)
    const targetDate = new Date(2026, 1, 28, 15, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Cálculos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Escribir en el HTML
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;

      // Si la cuenta termina
      if (distance < 0) {
        clearInterval(timer);
        const countdownContainer = document.getElementById("countdown");
        if(countdownContainer) countdownContainer.innerHTML = "<p>¡Es Hoy!</p>";
      }
    }, 1000);
  }
});
// --- LÓGICA DEL FORMULARIO ---
  const form = document.getElementById('rsvp-form');
  const message = document.getElementById('rsvp-message');
  
  // ¡¡¡PEGA AQUÍ TU LINK LARGO ENTRE LAS COMILLAS!!!
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwc6kMhPUHet1cgQTWMoDJ0ZvCD7PTc0JkHQZLJoOMWFfOiG81rap7mKXiuwzjnbpMN3Q/exec';

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault(); // Evita que la página se recargue
      
      const btn = document.getElementById('btn-submit');
      const originalText = btn.innerText;
      
      // 1. Deshabilitar botón para que no den clic 2 veces
      btn.disabled = true;
      btn.innerText = "ENVIANDO...";

      // 2. Enviar los datos a Google
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          // 3. Todo salió bien
          form.style.display = "none"; // Ocultamos el form
          message.style.display = "block"; // Mostramos el gracias
          console.log('Success!', response);
        })
        .catch(error => {
          // 4. Algo falló
          console.error('Error!', error.message);
          btn.disabled = false;
          btn.innerText = originalText;
          alert("Hubo un error al enviar. Intenta de nuevo.");
        });
    });
  }
