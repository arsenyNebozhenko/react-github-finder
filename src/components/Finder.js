import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Profile from './Profile';

class Finder extends Component {
	state = {
		result: ''
	}

	handler = (result) => {
		this.setState({
			result
		})
	}

	render() {
		return (
			<div className="finder">
				<div className="finder__inner container">
					<SearchForm handler={this.handler} />
					<Profile user={this.state.result}/>
				</div>
			</div>
		);
	}
}

export default Finder;