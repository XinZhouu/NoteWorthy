import React, {useEffect} from 'react';
import './Home.css';
import NavBar from "./NavBar.jsx";

function Home() {
	useEffect(() => {
		// Add the body-background class to the body tag
		document.body.classList.add('body-background');

		// Optionally, clean up by removing the class when the component unmounts
		return () => {
			document.body.classList.remove('body-background');
		};
	}, []);


	return (
		<div className="app-container">
			<NavBar/>
			<div className="content-container">
				<div className="centered-text">N O T E W O R T H Y</div>
				<div className="bottom-text">A CAPPELLA</div>
			</div>
		</div>
	);
}

export default Home;