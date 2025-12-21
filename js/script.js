/* --- CUENTA REGRESIVA --- */
// Configura aquí la fecha de la boda: Año, Mes (0 = Enero, 9 = Octubre), Día, Hora
const targetDate = new Date(2026, 2, 28, 15, 0, 0).getTime(); 
// Nota: Mes 9 es Octubre porque Javascript cuenta desde 0

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculos matemáticos para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar en el HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Si la cuenta termina
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<p>¡Es Hoy!</p>";
  }
}, 1000);
