const searchPhoto = document.getElementById('currentPhoto'),
nextPhoto = document.getElementById('nextPhoto'),
prevPhoto = document.getElementById('prevPhoto'),
photos = ['i/IAC.jpg', 'i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/new-museum.jpg'];

let i = 0;

function nextSlider() {
	if (i < photos.length - 1) {
		searchPhoto.src = photos[i];
		 i++;
		 return (i);
	} else {
		return i = 0;
	}
};

nextPhoto.onclick = nextSlider;