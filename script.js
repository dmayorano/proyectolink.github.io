const botonesCompartir = document.querySelectorAll('.compartir');

botonesCompartir.forEach((boton) => {
  boton.addEventListener('click', () => {
    const enlace = window.location.href;
    navigator.clipboard.writeText(enlace);
    alert('Enlace copiado al portapapeles');
  });
});