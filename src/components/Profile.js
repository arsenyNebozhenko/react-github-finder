import React, { Component } from 'react';
import ProfileDetails from './ProfileDetails';

class Profile extends Component {
	render() {
		const {user} = this.props;
		if (user) {
			return (
				<div className="profile">
					<div className="profile__col">
						<img src={user.avatar_url} className="profile__avatar" alt="arsenyNebozhenko avatar"/>
					</div>
					<div className="profile__col">
						<div className="profile__name">{user.name}</div>
						<div className="profile__login">{user.login}</div>
						<ProfileDetails user={user} />
						<a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile__link">Go to profile</a>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Profile;