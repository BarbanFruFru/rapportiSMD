const scriptURL = 'https://script.google.com/macros/s/AKfycbxHW3_VxM0sQgqvVunAzgay3z76jWmBF-5mjmAtwIQq9m39C3NcK_YCf8ZQhTb32bgv/exec'

const form = document.forms['ModuloArresto']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Rapporto inviato correttamente."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Errore!', error.message))
})
