import { Component } from 'react';
import homeStyles from '../styles/home.module.css';

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
		if (this.props.newLevel && this.props.newCase) {
			if (this.props.newLevel >= this.state.level || this.props.newCase >= this.state.cases) {
				this.setState({
					level: this.props.newLevel,
					cases: this.props.newCase
				});
			}
		}
	}

	render() {
		if (
			this.props.gameLevel < this.state.level ||
			(this.props.gameLevel == this.state.level && this.props.gameCase <= this.state.cases)
		) {
			return <div>{this.props.children}</div>;
		} else {
			return (
				<div>
					<a href="#" className={`${homeStyles.button} ${homeStyles.blockbutton}`}>
						<b>Locked</b> &#128274; {this.props.gameTitle}
					</a>
				</div>
			);
		}
	}
}
