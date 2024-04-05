import React, { useState, useEffect } from 'react';

function DynamicBackground() {
	const [colorIndex, setColorIndex] = useState(0);
	const gradientColors = [
		"linear-gradient(to right, #ff7e5f, #feb47b)", // Example gradient 1
		"linear-gradient(to right, #00c6ff, #0072ff)", // Example gradient 2
		"linear-gradient(to right, #f857a6, #ff5858)", // Example gradient 3
		// Add more gradients as desired
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setColorIndex((current) => (current + 1) % gradientColors.length);
		}, 3000); // Change every 3000 milliseconds (3 seconds)

		return () => clearInterval(intervalId); // Clean up interval on component unmount
	}, [gradientColors.length]);

	return (
		<div
			style={{
				height: '100vh',
				backgroundImage: gradientColors[colorIndex],
				transition: 'background-image 1s ease'
			}}
		>
			{/* Content goes here */}
		</div>
	);
}

export default DynamicBackground;