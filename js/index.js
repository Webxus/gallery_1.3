const searchPhoto = document.getElementById('currentPhoto'),
nextPhoto = document.getElementById('nextPhoto'),
prevPhoto = document.getElementById('prevPhoto'),
photos = ['i/IAC.jpg', 'i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/new-museum.jpg'];

let i = 0;
searchPhoto.src = photos[i];

function nextSlider() {
	if (i < photos.length -1) {
		i++;
	} else {
		i = 0;
	}
	searchPhoto.src = photos[i];
};

nextPhoto.onclick = nextSlider;

function prevSlider() {
	if (i <= 0) {
		i = (photos.length - 1);
	} else {
		i--;
	}
	searchPhoto.src = photos[i];
};

prevPhoto.onclick = prevSlider;