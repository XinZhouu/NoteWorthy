import React, {useEffect} from 'react';
import './Members.css';
import NavBar from "./NavBar.jsx";
import Member from './Member.jsx';

const members = [
	{ id: 1,
		name: 'Eddie Cekici',
		image: '/Eddie.jpeg',
		role: 'Co-Business Manager',
		voice: 'Bass',
		semesterNW: '6th',
		semesterBK: '8th',
		major: 'chemical Biology/Statistics',
		interest: 'being albanian, gipsy kings, olive oil, outer wilds, jon bois',
		bio: 'Hey, what’s up y’all, it’s nice to meet you, but it’s even better to meet me. My name is Eddie Cekici, I have 250 hours in Noteworthy and I specialize in making weird ass noises with my mouth. Noteworthy is a way of life for me. I go in there, do some b’s, maybe some k’s, throw in a couple t’s in there to really get everybody pumped. The chicks go wild. Like feral hogs. Did you know that feral hogs will eat people? Apparently they cause so much agricultural and even property damage that it’s legal in Texas to hunt them from a goddamn helicopter. And they WILL eat human flesh if given the chance. Just like pangolins. Well, I lied about the pangolins, but you believed me, didn’t you? And that’s what really matters, because belief in an assumed truth is stronger than proof of reality, and through this we are able to change not just our perceptions of reality, but reality itself. For example, this tea I’m about to drink is super hot, but if I simply believe it is cold and I down it all in on- oh no oh ow hot hoo boy oh no that no wait no that was supposed to oh god HELP ahhhhh HELP ME PLEASE oh I can feel it making a hole in my throat that’s not good ok hoo ouch ow oh no nope no please I’m sorry anyways this date is going well don’t you agree? no? that’s ok more panda express crab rangoons for me' },
	{ id: 2, name: 'Ellington Chen', image: '/Ellington.jpeg', bio: 'This is member 2 bio.' },
	{ id: 3, name: 'Athena Liu', image: '/Athena.jpeg', bio: 'This is member 3 bio.' },
	{ id: 4, name: 'Bhaskar Roberts', image: '/Bhaskar.jpeg', bio: 'This is member 4 bio.' },
	{ id: 5, name: 'Tom Guan', image: '/Tom.jpeg', bio: 'This is member 5 bio.' },
	{ id: 6, name: 'Andrew Tran', image: '/Andrew.jpeg', bio: 'This is member 6 bio.' },
	{ id: 7, name: 'Stephanus Yang', image: '/Stephanus.jpeg', bio: 'This is member 7 bio.' },
	{ id: 8, name: 'Jessica Yu', image: '/Jessica.jpeg', bio: 'This is member 8 bio.' },
	{ id: 9, name: 'Jerry Hou', image: '/Jerry.jpeg', bio: 'This is member 9 bio.' },
];

function Members() {
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
		<div className="members-container">
			<NavBar/>
			<div className="intro-text">MEMBERS</div>
			<div className="ex-text">Click on their pictures to learn more!</div>
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
				{members.map(member => (
					<div key={member.id} style={{width: '30%', margin: '1%'}}>
						<Member member={member}/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Members;