import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './Member.css';

function Member({ member }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '80%', // Adjust modal width here
		},
	};

	return (
		<div style={{ textAlign: 'center', margin: '10px' }}> {/* Container styles, including text alignment and margin */}
			{/* Image element */}
			<img
				src={member.image}
				alt={member.name}
				onClick={openModal}
				style={{ cursor: 'pointer', maxWidth: '100%', height: 500, marginBottom: '10px' }} // Image styles, including margin at the bottom
				className="member-image" // Use the class for styling
			/>
			{/* Member name displayed below the image */}
			<div>{member.name}</div>


			{/* Modal for displaying member details */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel={`Bio of ${member.name}`}
			>
				{/* Flex container for image and bio */}
				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					{/* Image */}
					<img
						src={member.image}
						alt={member.name}
						style={{ width: '50%', height: 'auto', marginRight: '20px' }}
					/>
					{/* Bio */}
					<div style={{width: '50%'}}>
						<p className="member-name">{member.name}</p>
						<p className="member-role">{member.role}</p>
						<p className="member-detail">
							<span style={{fontWeight: 'bold'}}>Voice Part: </span>
							<span style={{fontWeight: 'normal'}}>{member.voice}</span>
						</p>
						<p className="member-detail">
							<span style={{fontWeight: 'bold'}}>Semester in NoteWorthy: </span>
							<span style={{fontWeight: 'normal'}}>{member.semesterNW}</span>
						</p>
						<p className="member-detail">
							<span style={{fontWeight: 'bold'}}>Semester in Berkeley: </span>
							<span style={{fontWeight: 'normal'}}>{member.semesterBK}</span>
						</p>
						<p className="member-detail">
							<span style={{fontWeight: 'bold'}}>Major/Minor: </span>
							<span style={{fontWeight: 'normal'}}>{member.major}</span>
						</p>
						<p className="member-detail">
							<span style={{fontWeight: 'bold'}}>Interests: </span>
							<span style={{fontWeight: 'normal'}}>{member.interest}</span>
						</p>

						<p className="intro-bio">Bio</p>
						<p className="member-bio">{member.bio}</p>
					</div>
				</div>
				<button onClick={closeModal} style={{marginTop: '20px'}}>Close</button>
			</Modal>
		</div>
	);
}

// PropTypes for type checking
Member.propTypes = {
	member: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		role:PropTypes.string.isRequired,
		voice:PropTypes.string.isRequired,
		semesterNW:PropTypes.string.isRequired,
		semesterBK:PropTypes.string.isRequired,
		major:PropTypes.string.isRequired,
		interest:PropTypes.string.isRequired,
	}).isRequired,
};

export default Member;