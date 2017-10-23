const searchPhoto = document.getElementById('currentPhoto'),
nextPhoto = document.getElementById('nextPhoto'),
prevPhoto = document.getElementById('prevPhoto'),
photos = ['i/IAC.jpg', 'i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/new-museum.jpg', 'i/spinner.gif'];

let i = 0;
function nextSlider() {
	if (i < photos.length) {
		searchPhoto.src = photos[i++];
	} else {
		i = 0;
	}
};
nextPhoto.onclick = nextSlider;

function prevSlider() {
	if (i < photos.length) {
		searchPhoto.src = photos[i--];
	} else {
		i = 0;
	}
}
prevPhoto.onclick = prevSlider;