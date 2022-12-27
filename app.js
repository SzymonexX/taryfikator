const bgc_frame = document.getElementById('bgc-id')
const input_url = document.getElementById('input-url')
const error = document.getElementById('error')
const btn_hamburger = document.getElementById('btn-hamburger')
const ul_list = document.getElementById('ul-list')
const img_button = document.getElementById('img-button')
const ul_img_button = document.getElementById('ul-img-button')

document.body.style.backgroundImage = `url(background.png)`

if (typeof localStorage.getItem('image_url') != 'undefined') {
	if (localStorage.getItem('image_url')) {
		document.body.style.backgroundImage = `url(${localStorage.getItem('image_url')})`
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

	document.body.style.backgroundImage = `url(background.png)`
}

function show_hide_menu() {
	ul_list.classList.toggle('ul-active')
}
btn_hamburger.onclick = function() {
	show_hide_menu()
}
img_button.onclick = function() {
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
