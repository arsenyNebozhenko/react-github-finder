import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
	handleChange = (event) => {
		let username = event.target.value;

		axios(`https://api.github.com/users/${username}`, {
			client_id: 'ee9941260d6933f409e6',
			client_secret: '776c596bb8671f9f6793ddb7ac9c412c0211142f'
		})
			.then(res => this.props.handler(res.data))
			.catch(err => console.log(err));
	}
	render() {
		return (
			<section className="search-form">
				<h1 className="search-form__title">Search Github Users</h1>
				<div className="search-form__subtitle">Enter a username to fetch a user profile and repos</div>
				<input type="text" className="search-form__input" onChange={this.handleChange}/>
			</section>
		);
	}
}

export default SearchForm;