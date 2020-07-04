import { Component } from 'react';
import styles from './layout.module.css';

function increment(state, props) {
	return {
		score: state.score + props.step
	};
}

export default class Score extends Component {
	state = {
		score: 0
	};

	handleIncrement = () => {
		this.setState(increment);
	};

	componentDidUpdate() {
		localStorage.setItem('_fndg_score', JSON.stringify(this.state));
	}

	componentDidMount() {
		const data = localStorage.getItem('_fndg_score');
		if (data) {
			this.setState((prevState) => {
				return JSON.parse(data);
			});
		}
		this.handleIncrement();
	}

	render() {
		return (
			<div className={styles.score}>
				<div>Score: {this.state.score}</div>
			</div>
		);
	}
}
