import React from 'react';

import companyIcon from './../assets/company.svg';
import locationIcon from './../assets/location.svg';
import emailIcon from './../assets/email.svg';

const ProfileDetails = ({user}) => {
	let details = [
		{text: user.company, icon: companyIcon},
		{text: user.location, icon: locationIcon},
		{text: user.email, icon: emailIcon}
	]

	details = details.filter(detail => detail.text)

	let i = 0;
	const listItems = details.map(detail =>
		<li className="profile__details-item" key={i++}>
			<img src={detail.icon} alt="" className="profile__details-icon"/>
			<div className="profile__details-text">{detail.text}</div>
		</li>
	);
	return (
		<ul className="profile__details">{listItems}</ul>
	);
}

export default ProfileDetails;