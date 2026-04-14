const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (form && submitBtn) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = 'gracias.html';
      } else {
        alert('Hubo un problema al enviar el formulario. Inténtelo de nuevo.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar consulta';
      }
    } catch (error) {
      alert('No se pudo enviar el formulario. Revise su conexión e intente nuevamente.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar consulta';
    }
  });
}