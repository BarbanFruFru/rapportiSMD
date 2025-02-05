const scriptURL = 'https://script.google.com/macros/s/AKfycbza2KWzCHfja41_8ITQy3GBM0AB22hP2FGzmqzt01pV43gPyeRMgg3Twk65_AaBS7N9Xw/exec';
const form = document.forms['ModuloArresto'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { 
    method: 'POST', 
    body: new URLSearchParams(new FormData(form)) 
  })
  .then(response => response.text()) 
  .then(data => {
    alert("Rapporto inviato correttamente.");
    window.location.reload(); // Ricarica la pagina dopo l'invio
  })
  .catch(error => console.error('Errore!', error.message));
});
