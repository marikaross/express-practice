var button = document.querySelector('button')

button.addEventListener('click', partyTime)

function partyTime(event) {
  event.target.style.backgroundColor = 'magenta'
}