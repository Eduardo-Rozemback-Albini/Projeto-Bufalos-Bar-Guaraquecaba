const popup = document.querySelector('.popup-wrapper')
const closebutton = document.querySelector('.popup-close')

closebutton .addEventListener('click', () => {
	popup.style.display = ('none')
})