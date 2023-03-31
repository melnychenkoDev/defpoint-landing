const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = form.elements['name'].value;
	const surname = form.elements['surname'].value;
	const email = form.elements['email'].value;
	const phone = form.elements['phone'].value;

	const data = {
		name: name,
		surname: surname,
		email: email,
		phone: phone
	};

	// fetch('', {
	// 	method: 'POST',
	// 	body: JSON.stringify(data),
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	}
	// })
	//  .then(response => response.json())
	//  .then(data => console.log(data))
	//  .catch(error => console.error(error));

	form.reset();
});

function addCountryCode(input) {
	const countryCode = '+380 ';
	let value = input.value.replace(/\D/g, '');
	value = value.replace('380', '');
	value = countryCode + value;
	value = value.replace(/(\d{3})(\d{2})(\d{3})/, "$1 $2 $3");
	input.value = value.slice(0, 16);
}

const inputTel = document.querySelectorAll('input[type="tel"]');
inputTel.forEach(item => {
	item.addEventListener('keyup', () => addCountryCode(item));
	item.addEventListener('focus', () => addCountryCode(item));
});

window.addEventListener('scroll', function() {
	const navbar = document.querySelector('header');
	navbar.classList.toggle('sticky', window.scrollY > 0);
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('#navbar');

burger.addEventListener('click', function() {
	this.classList.toggle('menu-open');
	menu.classList.toggle('menu-open');
});


function smoothScroll(target, duration) {
	let target2 = document.querySelector(target);
	let targetPosition = target2.offsetTop;
	let startPosition = window.pageYOffset;
	let distance = targetPosition - startPosition;
	let startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		let timeElapsed = currentTime - startTime;
		let run = ease(timeElapsed, startPosition, distance - 50, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

let links = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function(e) {
		e.preventDefault();
		let href = this.getAttribute('href');
		smoothScroll(href, 1000);
	});
}

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});