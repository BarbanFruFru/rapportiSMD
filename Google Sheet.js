const scriptURL = 'https://script.google.com/macros/s/AKfycbyJgnz7XVICPgi1Qa7oyBjQhv1GkJdGEm-A7QW7gK0BbjkFILBR3FughK8jnqM7N7r5/exec'

const form = document.forms['ModuloArresto']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Rapporto inviato correttamente."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Errore!', error.message))
})
