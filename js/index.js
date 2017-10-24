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
		searchPhoto.src = photos[i];
		i = 0;
		return i;
	}
};

nextPhoto.onclick = nextSlider;

function prevSlider() {
	if (i < 1) {
		searchPhoto.src = photos[i];
		 i = (photos.length - 1);
		 return (i);
	} else {
		searchPhoto.src = photos[i];
		i--;
		return i;
	}
};

prevPhoto.onclick = prevSlider;