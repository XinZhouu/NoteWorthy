import React, { useState } from 'react';

const images = [
	'/poster1.png',
	'/poster2.png',
	'/poster3.png',
	'/poster4.png',
	'/poster5.png',
	// Add more images as needed
];

function ImageGallery() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastImage = currentIndex === images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="slider-container">
			<button onClick={goToPrevious}>&lt;</button> {/* Updated */}
			<img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
			<button onClick={goToNext}>&gt;</button> {/* Updated */}
		</div>
	);
}

export default ImageGallery;