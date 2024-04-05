import React, {useEffect} from 'react';
import Slider from 'react-slick';
import './Videos.css';
import NavBar from "./NavBar.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Videos() {

	const videoIds = ['cDjY-1WuB3o', 'oNoCPGvcCdI', 'Qv1kHcRoAAg'];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // Number of items to show at once
		slidesToScroll: 1, // Number of items to scroll at once
	};

	return (
		<div className="video-container">
			<NavBar/>
			<div className="video-title">Our Favorite Videos</div>
			<div className='video-slider'>
				<Slider {...settings}>
					{videoIds.map((id, index) => (
						<div key={index}>
							<iframe
								width="100%"
								height="500" // Adjust based on your layout
								src={`https://www.youtube.com/embed/${id}`}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Embedded youtube"
							/>
						</div>
					))}
				</Slider>
			</div>

			<p className="youtube-text">Find us on <a href="https://www.youtube.com/@UCBNoteworthy" className="youtube-link" target="_blank" rel="noopener noreferrer">YouTube</a>
			</p>
		</div>
)
	;
}

export default Videos;