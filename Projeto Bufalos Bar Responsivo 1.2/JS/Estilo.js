/** INICIO DO POP-UP PROMOCIONAL */

const popup = document.querySelector('.popup-wrapper')
const closebutton = document.querySelector('.popup-close')

closebutton .addEventListener('click', () => {
	popup.style.display = ('none')
})

/** FIM DO POP-UP PROMOCIONAL */

/** INICIO DO JS CARROSSEL */

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach((control) => {
	control.addEventListener('click', () => {
	const isleft = control.classList.contains('arrow-left');
	
	if (isleft) {
		currentItem -= 1;
	}

	else {
		currentItem += 1;
	}

	if (currentItem >= maxItems){
		currentItem = 0;
	}

	if (currentItem < 0) {
		currentItem = maxItems - 1;
	}

	items.forEach((item) => item.classList.remove('current-item'));

	items[currentItem].scrollIntoView({
		inline: 'center',
		behavior: 'smooth'
	});

	items[currentItem].classList.add('current-item');



	/*console.log('control', isleft, currentItem);*/

	});
});


/** FIM DO JS CARROSSEL */


/** INICIO DO JS MENU MOBILE */
const btnMenu = document.getElementById('btn-mobile');

function MenuClickMobile() {
	const MenuMobile = document.getElementById('menu-escondido');
	MenuMobile.classList.toggle('active');
}

btnMenu.addEventListener('click', MenuClickMobile);

/** FIM DO JS MENU MOBILE */


/*INICIO DO COMANDO ABRIR TELA CHEIA PAISAGEM*/

const abrir = document.querySelector('.openMAPA');

abrir .addEventListener('click', () => {

	const MapaAberto = document.querySelector('.closeMAPA')

	MapaAberto.style.display = ('block')
})

/*FIM DO COMANDO ABRIR TELA CHEIA PAISAGEM*/



/* INICIO DO COMANDO FECHAR TELA CHEIA PAISAGEM */

const fechar = document.querySelector('.closeMAPA')


fechar .addEventListener('click', () => {
	fechar.style.display = ('none')
})

/*FIM DO COMANDO FECHAR TELA CHEIA PAISAGEM*/


/** INICIO DO JS CARROSSEL 2 */

const controls2 = document.querySelectorAll('.control-2');
let currentItem2 = 0;
const items2 = document.querySelectorAll('.item-2');
const maxItems2 = items2.length;

controls2.forEach((control2) => {
	control2.addEventListener('click', () => {
	const isleft2 = control2.classList.contains('arrow-left-2');
	
	if (isleft2) {
		currentItem2 -= 1;
	}

	else {
		currentItem2 += 1;
	}

	if (currentItem2 >= maxItems2){
		currentItem2 = 0;
	}

	if (currentItem2 < 0) {
		currentItem2 = maxItems2 - 1;
	}

	items2.forEach((item2) => item2.classList.remove('current-item-2'));

	items2[currentItem2].scrollIntoView({
		inline: 'center',
		behavior: 'smooth'
	});

	items2[currentItem2].classList.add('current-item-2');



	/*console.log('control', isleft, currentItem);*/

	});
});


/** FIM DO JS CARROSSEL 2 */