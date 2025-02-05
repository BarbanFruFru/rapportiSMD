const scriptURL = 'https://script.google.com/macros/s/AKfycbwsMwqLUkzQfrxf0T9YxZKlQ2cgpACXEm8rnULPvKhgqctfqdvfmo2e7OKYibEQ1eieXA/exec'

const form = document.forms['ModuloArresto']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Rapporto inviato correttamente."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Errore!', error.message))
})
