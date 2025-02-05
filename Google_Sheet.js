const scriptURL = 'https://script.google.com/macros/s/AKfycbyGZmZ1IuXbHDIcJ4jrUs6ofmeRAUEjTfL02yWN2k1yqGjehUfwzZlbhr27LRHX5QpdPg/exec'

const form = document.forms['ModuloArresto']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Rapporto inviato correttamente."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Errore!', error.message))
})
