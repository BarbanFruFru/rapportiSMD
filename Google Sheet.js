const scriptURL = 'https://script.google.com/macros/s/AKfycbyonEeiFHAcCRNxxpqTEb-Oez4Y18gjy79xOqec9hu5pv6yu3263MxNHa1OyArZNfJMwQ/exec'

const form = document.forms['ModuloArresto']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormDaya(form)})
  .then(responde => alert("Rapporto inviato correttamente."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Errore!', error.message))
})
