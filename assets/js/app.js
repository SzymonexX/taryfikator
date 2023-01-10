const bgc_frame = document.getElementById('background-tool')
const input_url = document.getElementById('text-input')
const error = document.getElementById('error')
const btn_hamburger = document.getElementById('btn-hamburger')
const ul_list = document.getElementById('ul-list')
const img_button = document.getElementById('img-button')
const ul_img_button = document.getElementById('ul-img-button')
const img_big = 'url(./assets/img/background-big.webp)'
const img_small = 'url(./assets/img/background-small.webp)'

document.body.style.backgroundImage = img_big

if (typeof localStorage.getItem('image_url') != 'undefined') {
	if (localStorage.getItem('image_url')) {
		document.body.style.backgroundImage = `url(${localStorage.getItem('image_url')})`
	} else {
		$(window).on('resize', function () {
			if ($(this).width() < 767.98) {
				$(ul_list).removeClass('ul-active')
				$('body').css('background-image', img_small)
			}

			if ($(this).width() > 767.98) {
				$('body').css('background-image', img_big)
			}
		})
	}
}

function show_hide_frame() {
	bgc_frame.style.visibility = 'visible'
}

function hide_frame() {
	bgc_frame.style.visibility = 'hidden'
	error.style.visibility = 'hidden'
}

function change_background() {
	const input_value = input_url.value

	error.style.visibility = 'hidden'

	if (input_value.length) {
		localStorage.setItem('image_url', input_value)

		document.body.style.backgroundImage = `url(${localStorage.getItem('image_url')})`
	} else {
		error.style.visibility = 'visible'
	}
}

function reset_background() {
	localStorage.removeItem('image_url')

	if ($(this).width() < 767.98) {
		$('body').css('background-image', img_small)
	}

	if ($(this).width() > 767.98) {
		$('body').css('background-image', img_big)
	}
}

function show_hide_menu() {
	ul_list.classList.toggle('ul-active')
}
btn_hamburger.onclick = function () {
	show_hide_menu()
}
img_button.onclick = function () {
	show_hide_frame()
}
ul_img_button.onclick = function () {
	show_hide_frame()
}

$(window).on('resize', function () {
	var win = $(this) //this = window
	if (win.width() > 767.98) {
		$(ul_list).removeClass('ul-active')
	}
})
