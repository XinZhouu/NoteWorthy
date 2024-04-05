import React, {useEffect, useState} from 'react';
import './AboutUs.css';
import NavBar from "./NavBar.jsx";
import ImageGallery from "./ImageGallery.jsx";

function AboutUs() {
	useEffect(() => {
		// Save the current body background before changing it
		const originalBackground = document.body.style.background;

		// Apply a static linear gradient as the background
		document.body.style.background = 'linear-gradient(to bottom, black, grey)';
		document.body.style.height = '100vh';
		document.body.style.margin = '0';
		document.body.style.backgroundRepeat = 'no-repeat';
		document.body.style.backgroundAttachment = 'fixed';
		document.body.style.backgroundSize = 'cover';

		// Cleanup function to revert to the original background on unmount
		return () => {
			document.body.style.background = originalBackground;
		};
	}, []);

	return (
		<div>
		<div className="about-container">
			<NavBar/>
			<div className="aboutContent-container">
				<div className="introTitle">About Us</div>
				<div className="detailedIntro">
					<p>We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular
						songs!
						It always feels sunny when we perform, and not just because of our golden vests!
						Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times,
						released an album entirely composed of original songs, and performed at the 2022 UC Berkeley
						commencement.
					</p>
				</div>

				<div className="grid-container">
					<div className="gridTitle">Events</div>
					<div className="gridTitle">Hire Us</div>
					<div className="gridTitle">Follow Us</div>

					<div className="gridIntro">
						We organize Welcome Back to A Cappella, Cal’s a cappella orientation,
						at the beginning of every semester. Hundreds of students turn out to hear 13+
						a cappella groups perform. The show is always fun, and we hope you’ll come.
					</div>

					<div className="gridIntro">
						We’re no stranger to weddings, private parties, tailgates, and conferences.
							We’ve performed at venues including San Francisco City Hall,
							University House, the Faculty Club, and UC Berkeley’s 2022 Commencement.
					</div>

					<div className="social-media-row">
						<a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank" aria-label="YouTube"><i
							className="fab fa-youtube"></i></a>
						<a href="https://www.instagram.com/cal_noteworthy/" target="_blank" aria-label="Instagram"><i
							className="fab fa-instagram"></i></a>
						<a href="https://www.facebook.com/Noteworthy" target="_blank" aria-label="Facebook"><i
							className="fab fa-facebook"></i></a>
						<a href="https://www.tiktok.com/@uc_noteworthy" target="_blank" aria-label="TikTok"><i
							className="fab fa-tiktok"></i></a>
					</div>

					<ImageGallery/>
					<img src="/hireus.jpg" alt="Descriptive Alt Text" className="responsive-img"/>
					<div className="grid-2x2">
						<div className="grid-img"><img src="/i1.jpeg" alt="Image 1"/></div>
						<div className="grid-img"><img src="/i2.jpeg" alt="Image 2"/></div>
						<div className="grid-img"><img src="/i3.jpeg" alt="Image 3"/></div>
						<div className="grid-img"><img src="/i4.jpeg" alt="Image 4"/></div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default AboutUs;