import homeStyles from '../styles/home.module.css';

export default function ResultComment({ text, points }) {
	if (points > 0) {
		return (
			<div className={`${homeStyles.resultcomment} ${homeStyles.resultcorrect}`}>
				&#128077; {text} <b>+{points} points!</b>
			</div>
		);
	} else {
		return (
			<div className={`${homeStyles.resultcomment} ${homeStyles.resultwrong}`}>
				&#10060; {text} <b>{points} points!</b>
			</div>
		);
	}
}
