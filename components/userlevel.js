import { Component } from 'react';

export default class UserLevel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 1,
			cases: 1
		};
	}

	componentDidUpdate() {
		localStorage.setItem('_fndg_userlevel', JSON.stringify(this.state));
	}

	componentDidMount() {
		const data = localStorage.getItem('_fndg_userlevel');
		if (data) {
			this.setState((prevState) => {
				return JSON.parse(data);
			});
		}
	}

	render() {
		if (
			this.props.gameLevel < this.state.level ||
			(this.props.gameLevel == this.state.level && this.props.gameCase <= this.state.cases)
		) {
			return <div>{this.props.children}</div>;
		} else {
			return <div>(Locked) {this.props.gameTitle}</div>;
		}
	}
}
